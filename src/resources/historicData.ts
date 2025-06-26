import { HistoricDataParams } from '../types/HistoricDataParams';
import { HistoricDataResponse } from '../types/responses/HistoricDataResponse';
import { isEpochISO8601 } from '../utils/date';

import { HttpClient } from '../utils/http';
import { buildUrlWithParams } from '../utils/url';

export class HistoricData {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/historical/candle');
  }

  async get(params: HistoricDataParams): Promise<HistoricDataResponse> {
    if (!isEpochISO8601(params.startTime) || !isEpochISO8601(params.endTime)) {
      throw new Error('startTime and endTime must be in Epoch or ISO8601 format');
    }
    return (await this.http.get(buildUrlWithParams('/range', params))).payload as HistoricDataResponse;
  }
}
