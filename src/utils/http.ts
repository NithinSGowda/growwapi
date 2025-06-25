import { Auth } from '../resources/auth';

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
    return this.handleResponse(res);
  }

  async post(path: string, body: any) {
    const res = await fetch(this.url(path), {
      method: 'POST',
      headers: await this.headers(),
      body: JSON.stringify(body)
    });
    return this.handleResponse(res);
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
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
}
