import type {
  AnyStringOrNotKnownOrExist,
  NotKnownOrExist,
} from '@/types/general.types';
import type { Base } from './base.entity';
import type { Films } from './films.entity';
import type { Species } from './species.entity';
import type { Starships } from './starships.entity';
import type { Vehicles } from './vehicles.entity';

export class People implements Base {
  constructor(
    public name: string,
    public birthYear: string,
    public eyeColor: AnyStringOrNotKnownOrExist,
    public gender: 'male' | 'female' | NotKnownOrExist,
    public hairColor: AnyStringOrNotKnownOrExist,
    public height: number | 'unknown',
    public mass: number,
    public skinColor: string,
    public homeworld: string,
    public films: Films['url'][],
    public species: Species['url'][],
    public vehicles: Vehicles['url'][],
    public starships: Starships['url'][],
    public created: Date,
    public edited: Date,
    public url: string,
  ) {
    this.eyeColor = 'Unknown';
  }
}
