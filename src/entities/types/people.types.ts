import type { People } from '../people.entity';

export type SortedGenderOutput = {
  gender: People['gender'];
  characters: Pick<People, 'name' | 'height'>[];
}[];
