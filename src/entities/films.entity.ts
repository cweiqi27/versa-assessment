import type { Base } from './base.entity';
import type { People } from './people.entity';
import type { Species } from './species.entity';
import type { Starships } from './starships.entity';
import type { Vehicles } from './vehicles.entity';

export class Films implements Base {
  constructor(
    public title: string,
    public episodeId: number,
    public openingCrawl: string,
    public director: string,
    public producer: string,
    public releaseDate: Date,
    public species: Species['url'][],
    public starships: Starships['url'][],
    public vehicles: Vehicles['url'][],
    public characters: People['url'][],
    public url: string,
    public created: Date,
    public edited: Date,
  ) {}
}
