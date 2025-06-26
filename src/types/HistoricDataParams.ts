import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { Segment } from './Segment';

export interface HistoricDataParams extends BaseParams {
    exchange: Exchange;
    segment: Segment;
    tradingSymbol: string;
    startTime: string | number;
    endTime: string | number;
    intervalInMinutes?: number;
}
