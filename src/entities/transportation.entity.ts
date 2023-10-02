import type { People } from './people.entity';

export interface Transportation {
  crew: number;
  passengers: number;
  pilots: People['url'][];
}
