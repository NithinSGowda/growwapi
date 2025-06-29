import { BaseParams } from '../BaseParams';
import { Exchange } from '../enums/Exchange';
import { Segment } from '../enums/Segment';

export interface HistoricDataParams extends BaseParams {
    endTime: string | number;
    exchange: Exchange;
    segment: Segment;
    startTime: string | number;
    tradingSymbol: string;
    intervalInMinutes?: number;
}
