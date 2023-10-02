import type { People } from '@/entities/people.entity';
import { PeopleService } from '../people.service';
import { samplePeople, samplePeopleSorted } from './people-sample';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    service = new PeopleService();
  });

  describe('sort', () => {
    it('should correctly sort the people array', () => {
      const res = service.sort(samplePeople as People[]);
      expect(res).toEqual(samplePeopleSorted);
    });
  });
});
