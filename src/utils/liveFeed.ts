import { createUser } from 'ts-nkeys';
import { Auth } from '../resources/auth';
import { connect } from 'nats.ws';
import { jwtAuthenticator, NatsConnection } from 'nats';
import { SOCKET_URL } from '../config';
import { Instructions } from '../resources/instructions';
import { InstructionsTypeParams } from '../types/InstructionsTypeParams';

const keyPair = createUser();
const publicKey = keyPair.getPublicKey();

const jwt = await Auth.socketAccessToken(publicKey.toString('utf-8'));

export function connectToLiveFeed(): Promise<NatsConnection> {
  return connect({
    servers: SOCKET_URL,
    authenticator: jwtAuthenticator(jwt, keyPair.getSeed()),
  });
}

export async function generateSubscriptionTopic(exchangeToken: number): Promise<string> {
  const instruction = await (new Instructions).getFilteredInstructions({
    exchangeToken: exchangeToken,
  });
  if (!instruction || instruction.length === 0) throw new Error(`No entity found for exchange token: ${exchangeToken}`);

  return buildSubscriptionTopic(instruction[0]);
}

function buildSubscriptionTopic(instruction: InstructionsTypeParams): string {
  const segment = instruction.segment?.toLowerCase();
  const exchange = instruction.exchange?.toLowerCase();
  const token = instruction.exchangeToken;

  return `/ld/${segment}/${exchange}/price.${token}`;
}
