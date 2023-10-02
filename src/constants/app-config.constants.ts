import type { RequestOptions } from 'http';

export class AppConfig {
  static readonly PORT = process.env.PORT || 8080;
  static readonly SWAPI_OPTIONS = {
    host: process.env.SWAPI_HOST_URL || 'https://swapi.dev/api/',
  } as const satisfies Pick<RequestOptions, 'host'>;
}
