import * as OTPAuth from 'otpauth';
import { AUTH_URL, SOCKET_TOKEN_URL } from '../config';
import { AccessToken } from '../types';

let accessToken: AccessToken | null = null;
let currentTokenRequest: Promise<string> | null = null;

export class Auth {
  public static async getAccessToken(): Promise<string> {
    if (accessToken) {
      if (new Date() < new Date(accessToken.expiry)) {
        return accessToken.token;
      }
    }

    if (currentTokenRequest) {
      return currentTokenRequest;
    }

    currentTokenRequest = (async () => {
      const response = await Auth.createAccessToken();
      if (!response.ok) {
        throw new Error(`Failed to create access token: ${response.statusText}, Status Code: ${response.status}, Response: ${await response.text()}`);
      }

      const data = await response.json();

      accessToken = data as AccessToken;
      return accessToken?.token;
    })();

    try {
      return await currentTokenRequest;
    } finally {
      currentTokenRequest = null;
    }
  }

  public static async socketAccessToken(publicKey: string): Promise<string> {
    const token = await Auth.getAccessToken();
    const result = await fetch(SOCKET_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socketKey: publicKey,
      }),
    });

    return result.ok ? result.json().then(data => data.token) : Promise.reject(new Error(`Failed to create socket access token: ${result.statusText}, Status Code: ${result.status}, Response: ${await result.text()}`));
  }

  private static async createAccessToken() {
    return await fetch(AUTH_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROWW_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totp: Auth.generateTOTP(),
      }),
    });
  }

  private static generateTOTP(): string {
    const secret = OTPAuth.Secret.fromBase32(process.env.GROWW_API_SECRET || '');
    return new OTPAuth.TOTP({
      secret: secret,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
    }).generate();
  }
}
