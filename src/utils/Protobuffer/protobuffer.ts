import protobuf from 'protobufjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const liveFeedProtoSchema = await protobuf.load(path.join(__dirname, './protos/liveFeed.proto'));
const liveFeedOrderUpdateProtoSchema = await protobuf.load(path.join(__dirname, './protos/orderUpdate.proto'));
const liveFeedPositionOrderUpdateProtoSchema = await protobuf.load(path.join(__dirname, './protos/positionSocket.proto'));

export const LiveFeedPriceDecoder = liveFeedProtoSchema.lookupType('StocksLivePriceProto');
export const LiveFeedMarketDepthDecoder = liveFeedProtoSchema.lookupType('StocksMarketDepthProto');
export const LiveFeedOrderUpdatesDecoder = liveFeedOrderUpdateProtoSchema.lookupType('OrderDetailsBroadCastDto');
export const LiveFeedPositionOrderUpdatesDecoder = liveFeedPositionOrderUpdateProtoSchema.lookupType('PositionDetailProto');
