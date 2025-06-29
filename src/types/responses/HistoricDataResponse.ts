import { CandleResponse } from './CandleResponse';

export interface HistoricDataResponse {
    candles: CandleResponse[];
    endTime: string;
    intervalInMinutes: number;
    startTime: string;
}
