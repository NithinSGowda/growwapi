import { HttpClient } from '../utils/http';
import { FeedResponse } from '../types/responses/FeedResponse';

export class Feed {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/holdings/user');
  }

  async list(): Promise<FeedResponse> {
    return this.http.get('');
  }
}
