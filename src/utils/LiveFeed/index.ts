import { createUser } from 'ts-nkeys';
import { Auth } from '../../resources/auth';
import { connect } from 'nats.ws';
import { jwtAuthenticator } from 'nats';
import { SOCKET_URL } from '../../config';
import { Instructions } from '../../resources/instructions';
import { InstructionsTypeParams } from '../../types/InstructionsTypeParams';
import { FNOOrderUpdatesDecoder, MarketDepthDecoder, EquityOrderUpdatesDecoder, PositionOrderUpdatesDecoder, PriceDecoder } from './Decoders';
import { liveMarketParser, liveUpdatesParser } from './Parser';
import { LiveFeedConnection, LiveFeedSubscriptionType } from '../../types';
import { SocketCredentials } from '../../types/responses/SocketCredentials';

const MAX_RETRY_COUNT = 10;

const keyPair = createUser();
const publicKey = keyPair.getPublicKey();

export async function connectToLiveFeed(): Promise<LiveFeedConnection> {
  const credentials: SocketCredentials = await Auth.socketAccessToken(publicKey.toString('utf-8'));

  const stream = connect({
    servers: SOCKET_URL,
    authenticator: jwtAuthenticator(credentials.token, keyPair.getSeed()),
  });

  return { stream: await stream, credentials };
}

export function liveFeedDecoder(type: LiveFeedSubscriptionType, data: Uint8Array): any {
  switch (type) {
  case LiveFeedSubscriptionType.Price:
    return PriceDecoder(data);
  case LiveFeedSubscriptionType.MarketDepth:
    return MarketDepthDecoder(data);
  case LiveFeedSubscriptionType.FnoOrderUpdates:
    return FNOOrderUpdatesDecoder(data);
  case LiveFeedSubscriptionType.FnoPositionUpdates:
    return PositionOrderUpdatesDecoder(data);
  case LiveFeedSubscriptionType.EquityOrderUpdates:
    return EquityOrderUpdatesDecoder(data);
  default:
    throw new Error(`Unknown subscription type: ${type}`);
  }
}

export async function generateSubscriptionTopic(type: LiveFeedSubscriptionType, subscriptionId: string, exchangeToken?: number): Promise<string> {
  const instruction = exchangeToken ? (await (new Instructions).getFilteredInstructions({
    exchangeToken: exchangeToken,
  }))[0] : null;

  return buildSubscriptionTopic(type, subscriptionId, instruction);
}

function buildSubscriptionTopic(type: LiveFeedSubscriptionType, subscriptionId: string, instruction: InstructionsTypeParams | null): string {
  if (!instruction) return liveUpdatesParser(type, subscriptionId);

  return liveMarketParser(type, instruction);
}

export async function retryStrategy(
  connection: LiveFeedConnection | null,
  retryCount: number,
  disconnect: () => Promise<void>,
  reconnect: () => Promise<void>,
  action: () => Promise<void>,
): Promise<void> {
  if (!connection) {
    console.error('Connection is not established. Please connect first.');
    return;
  }

  try {
    await action();
  } catch {
    try {
      await disconnect();
    } catch { /* ignore */ }

    const delay = Math.min(1000 * Math.pow(2, retryCount), 30000);
    setTimeout(async () => {
      retryCount++;
      if (retryCount < MAX_RETRY_COUNT) {
        await retryStrategy(
          connection,
          retryCount,
          disconnect,
          reconnect,
          reconnect,
        );
      }
    }, delay);
  }
}
