import { configDotenv } from 'dotenv';
import { Routes } from './routes/app.routes';
import { Server } from './utils/server.utils';

class VersaAssessment {
  static main() {
    configDotenv();
    const server = new Server().connect();

    new Routes(server);
  }
}

VersaAssessment.main();
