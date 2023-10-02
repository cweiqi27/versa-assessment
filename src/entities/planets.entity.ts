import type { Base } from './base.entity';
import type { Films } from './films.entity';
import type { People } from './people.entity';

export class Planets implements Base {
  constructor(
    public name: string,
    public diameter: number,
    public rotationPeriod: number,
    public orbitalPeriod: number,
    public gravity: number,
    public population: number,
    public climate: string,
    public terrain: string,
    public surfaceWater: number,
    public residents: People['url'][],
    public films: Films['url'][],
    public url: string,
    public created: Date,
    public edited: Date,
  ) {}
}
