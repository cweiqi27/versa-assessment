import { AppConfig } from '@/constants/app-config.constants';
import http from 'http';

export class Server {
  private readonly PORT = AppConfig.PORT;

  connect() {
    const port = this.PORT;

    const server = http.createServer();

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    return server;
  }
}
