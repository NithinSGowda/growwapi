import { API_URL } from './config';
import { Auth } from './resources/auth';
import { Holdings } from './resources/holdings';
import { Margins } from './resources/margins';
import { Orders } from './resources/order';
import { Positions } from './resources/positions';

export * from './types';

export class GrowwAPI {
  public position: Positions;
  public holdings: Holdings;
  public auth: Auth;
  public orders: Orders;
  public margins: Margins;

  constructor(baseUrl = API_URL) {
    this.position = new Positions(baseUrl);
    this.holdings = new Holdings(baseUrl);
    this.auth = new Auth();
    this.orders = new Orders(baseUrl);
    this.margins = new Margins(baseUrl);
  }
}
