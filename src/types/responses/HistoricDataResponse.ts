import { CandelResponse } from './CandelResponse';

export interface HistoricDataResponse {
    candles: CandelResponse[];
    start_time: string;
    end_time: string;
    interval_in_minutes: number;
}
