import { FileIoSevice } from '@/services/file-io.service';
import { PeopleService } from '@/services/people.service';

export class PeopleController {
  private peopleService = new PeopleService();
  private fileIoService = new FileIoSevice();

  async writeAllToFileSorted(url: string) {
    try {
      const people = await this.peopleService.getAll(url);
      const sortedPeople = this.peopleService.sort(people);

      this.fileIoService.writeToFile(
        './public/output.json',
        JSON.stringify(sortedPeople, null, 2),
      );
    } catch (err) {
      console.error(err);
    }
  }
}
