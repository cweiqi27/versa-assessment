import type { AppServer as Server } from '@/types/server.types';
import { SwRoutes } from './sw.routes';

export class Routes {
  constructor(private server: Server) {
    this.generate();
  }

  private generate(): void {
    this.generateSwRoutes();
  }

  private generateSwRoutes(): void {
    const swRoutes = new SwRoutes(this.server);
    swRoutes.getCharacters();
  }
}
