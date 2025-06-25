import { HttpClient } from '../utils/http';

export class Users {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/users');
  }

  async create(data: any) {
    return this.http.post('/create', data); // Resolves to /users/create
  }

  async list() {
    return this.http.get('');
  }

  async get(id: string) {
    return this.http.get(`/${id}`);
  }
}
