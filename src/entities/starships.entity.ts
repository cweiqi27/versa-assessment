import type { Base } from './base.entity';
import type { Films } from './films.entity';
import type { People } from './people.entity';
import type { Transportation } from './transportation.entity';

export class Starships implements Base, Transportation {
  constructor(
    public name: string,
    public model: string,
    public starshipClass: string,
    public manufacturer: string,
    public costInCredits: number,
    public length: number,
    public crew: number,
    public passengers: number,
    public maxAtmospheringSpeed: string,
    public hyperdriveRating: string,
    public MGLT: string,
    public cargoCapacity: string,
    public consumables: string,
    public films: Films['url'][],
    public pilots: People['url'][],
    public url: string,
    public created: Date,
    public edited: Date,
  ) {}
}
