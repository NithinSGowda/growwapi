import protobuf from 'protobufjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const protoSchema = await protobuf.load(path.join(__dirname, './protos/liveFeed.proto'));

export const LiveFeedPriceDecoder = protoSchema.lookupType('LiveFeedPrice');
export const LiveFeedMarketDepthDecoder = protoSchema.lookupType('LiveFeedMarketDepth');
// export const EquityOrderUpdatesDecoder = protoSchema.lookupType('EquityOrderUpdates');
