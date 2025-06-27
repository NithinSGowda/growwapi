import { API_URL } from './config';
import { Auth } from './resources/auth';
import { HistoricData } from './resources/historicData';
import { Holdings } from './resources/holdings';
import { Instructions } from './resources/instructions';
import { LiveData } from './resources/liveData';
import { Margins } from './resources/margins';
import { Orders } from './resources/order';
import { Positions } from './resources/positions';

export * from './types';

export class GrowwAPI {
  public positions: Positions;
  public holdings: Holdings;
  public auth: Auth;
  public orders: Orders;
  public margins: Margins;
  public instructions: Instructions;
  public livedata: LiveData;
  public historicData: HistoricData;

  constructor(baseUrl = API_URL) {
    this.positions = new Positions(baseUrl);
    this.holdings = new Holdings(baseUrl);
    this.auth = new Auth();
    this.orders = new Orders(baseUrl);
    this.margins = new Margins(baseUrl);
    this.instructions = new Instructions();
    this.livedata = new LiveData(baseUrl);
    this.historicData = new HistoricData(baseUrl);
  }
}
