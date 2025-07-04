import { Auth } from '../resources/auth';
import { BaseResponse } from '../types/responses/BaseResponse';
import camelcaseKeys from 'camelcase-keys';

export class HttpClient {
  constructor(
    private baseUrl: string,
    private basePath = '',
  ) {}

  private url(path: string) {
    return `${this.baseUrl}${this.basePath}${path}`;
  }

  async get(path: string) {
    const res = await fetch(this.url(path), {
      headers: await this.headers()
    });
    return (await this.handleResponse(res) as BaseResponse).payload;
  }

  async post(path: string, body: any) {
    const res = await fetch(this.url(path), {
      method: 'POST',
      headers: await this.headers(),
      body: JSON.stringify(body)
    });
    return (await this.handleResponse(res) as BaseResponse).payload;
  }

  private async headers() {
    const accessToken = await Auth.getAccessToken();

    return {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'x-client-platform': 'growwapi-nodejs-client',
    };
  }

  private async handleResponse(res: Response) {
    if (!res.ok) throw new Error(await res?.text());

    const jsonResponse = await res.json();
    return camelcaseKeys(jsonResponse, { deep: true });
  }
}
