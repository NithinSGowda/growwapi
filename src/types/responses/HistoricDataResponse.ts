import { CandleResponse } from './CandleResponse';

export interface HistoricDataResponse {
    candles: CandleResponse[];
    start_time: string;
    end_time: string;
    interval_in_minutes: number;
}
