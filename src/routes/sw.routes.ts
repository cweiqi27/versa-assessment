import { AppConfig } from '@/constants/app-config.constants';
import type { AppServer as Server } from '@/types/server.types';
import { PeopleController } from '@/controllers/people.controller';

export class SwRoutes {
  private host: string = this.getHost();
  private peopleController: PeopleController;

  constructor(private server: Server) {
    this.peopleController = new PeopleController();
  }

  getCharacters(): void {
    this.peopleController.writeAllToFileSorted(this.host + 'people/');
  }

  private getHost(): string {
    return AppConfig.SWAPI_OPTIONS.host;
  }
}
