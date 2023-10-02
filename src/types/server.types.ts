import type { IncomingMessage, Server, ServerResponse } from 'http';

export type AppServer = Server<typeof IncomingMessage, typeof ServerResponse>;
