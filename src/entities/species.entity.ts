import type { Base } from './base.entity';
import type { Films } from './films.entity';
import type { People } from './people.entity';
import type { Planets } from './planets.entity';

export class Species implements Base {
  constructor(
    public name: string,
    public classification: string,
    public designation: string,
    public averageHeight: number,
    public averageLifespan: number,
    public eyeColors: string,
    public hairColors: string,
    public skinColors: string,
    public language: string,
    public homeworld: Planets['url'][],
    public people: People['url'][],
    public films: Films['url'][],
    public url: string,
    public created: Date,
    public edited: Date,
  ) {}
}
