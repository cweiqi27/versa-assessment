import type { Base } from './base.entity';
import type { Films } from './films.entity';
import type { People } from './people.entity';
import type { Transportation } from './transportation.entity';

export class Vehicles implements Base, Transportation {
  constructor(
    public name: string,
    public model: string,
    public vehicleClass: string,
    public manufacturer: string,
    public length: number,
    public costInCredits: number,
    public crew: number,
    public passengers: number,
    public cargoCapacity: number,
    public consumables: string,
    public films: Films['url'][],
    public pilots: People['url'][],
    public url: string,
    public created: Date,
    public edited: Date,
  ) {}
}
