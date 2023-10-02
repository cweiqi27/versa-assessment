import type { People } from '@/entities/people.entity';
import type { SortedGenderOutput } from '@/entities/types/people.types';
import type { SwapiPageRes } from '@/types/swapi.types';
import { ExternalDataLoader } from '@/utils/external-data-loader.utils';
import { Transformers } from '@/utils/transformers.utils';

export class PeopleService {
  constructor() {}

  async getAll(url: string): Promise<People[]> {
    let page = 1;
    let hasNext = true;
    const people = [];

    while (hasNext) {
      try {
        console.log(`(People) Fetching page: ${page}...`);

        const res = (await ExternalDataLoader.get(
          url + '/?page=' + page++,
        )) as SwapiPageRes<Record<string, unknown>>;

        if ('detail' in res) {
          hasNext = false;
        } else {
          people.push(...res.results);
        }
      } catch (err) {
        console.error(err);
      }
    }

    // convert from snake_case to camelCase to preserve naming standards
    const transformedPeople = Transformers.convertKeysToCamelCase(
      people,
    ) as People[];

    return transformedPeople;
  }

  sort(people: People[]) {
    // sort based on gender first then height
    this.sortByGender(people);
    this.sortByHeight(people);

    // use reducer to group and return them into array of objects based on gender
    const sortedPeople = people.reduce((acc: SortedGenderOutput, person) => {
      const { gender, ...character } = person;
      const hasGroup = acc.find((group) => group.gender === gender);
      const characterObj = {
        name: character.name,
        height: character.height,
      };

      if (hasGroup) {
        hasGroup.characters.push(characterObj);
      } else {
        acc.push({
          gender,
          characters: [characterObj],
        });
      }

      return acc;
    }, []);

    return sortedPeople;
  }

  private sortByGender(people: People[]): People[] {
    const genderSortOrder = {
      male: 1,
      female: 2,
      unknown: 3,
      'n/a': 4,
    } as const;

    return people.sort((a, b) => {
      // or Infinity so that when there's some other gender other than the one above it will
      // place them last in the list
      const orderA = genderSortOrder[a.gender] || Infinity;
      const orderB = genderSortOrder[b.gender] || Infinity;
      return orderA - orderB;
    });
  }

  private sortByHeight(people: People[]): People[] {
    // sort them based on height
    return people.sort((a, b) => {
      if (a.height === 'unknown' && b.height === 'unknown') {
        // sort alphabetically based on name
        return a.name.localeCompare(b.name);
      } else if (a.height === 'unknown') {
        return 1;
      } else if (b.height === 'unknown') {
        return -1;
      } else {
        return a.height - b.height;
      }
    });
  }
}
