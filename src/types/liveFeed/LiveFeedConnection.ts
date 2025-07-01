import { NatsConnection } from 'nats';
import { SocketCredentials } from '..';

export interface LiveFeedConnection {
  stream: NatsConnection | null;
  credentials: SocketCredentials;
}
