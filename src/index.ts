import { API_URL } from './config';
import { Auth } from './resources/auth';
import { HistoricData } from './resources/historicData';
import { Holdings } from './resources/holdings';
import { Instructions } from './resources/instructions';
import { LiveData } from './resources/liveData';
import { LiveFeed } from './resources/liveFeed';
import { Margins } from './resources/margins';
import { Orders } from './resources/order';
import { Positions } from './resources/positions';
import { validateEnvVariables } from './utils/envValidator';

export * from './types';

export class GrowwAPI {
  public auth: Auth;
  public liveFeed: LiveFeed;
  public historicData: HistoricData;
  public holdings: Holdings;
  public instructions: Instructions;
  public liveData: LiveData;
  public margins: Margins;
  public orders: Orders;
  public position: Positions;

  constructor(baseUrl = API_URL) {
    validateEnvVariables();
    this.auth = new Auth();
    this.liveFeed = new LiveFeed();
    this.historicData = new HistoricData(baseUrl);
    this.holdings = new Holdings(baseUrl);
    this.instructions = new Instructions();
    this.liveData = new LiveData(baseUrl);
    this.margins = new Margins(baseUrl);
    this.orders = new Orders(baseUrl);
    this.position = new Positions(baseUrl);
  }
}
