import type { People } from '@/entities/people.entity';

export const samplePeople: Partial<People>[] = [
  {
    name: 'luke skywalker',
    height: 123,
    gender: 'male',
  },
  {
    name: 'some guy',
    height: 156,
    gender: 'male',
  },
  {
    name: 'ab',
    height: 126,
    gender: 'female',
  },
  {
    name: 'ab',
    height: 136,
    gender: 'female',
  },
  {
    name: 'ab',
    height: 156,
    gender: 'n/a',
  },
  {
    name: 'ba',
    height: 'unknown',
    gender: 'male',
  },
  {
    name: 'ab',
    height: 'unknown',
    gender: 'male',
  },
  {
    name: 'ab',
    height: 157,
    gender: 'female',
  },
  {
    name: 'ab',
    height: 12,
    gender: 'n/a',
  },
  {
    name: 'ab',
    height: 7,
    gender: 'n/a',
  },
  {
    name: 'ab',
    height: 20,
    gender: 'n/a',
  },
  {
    name: 'ab',
    height: 158,
    gender: 'female',
  },
  {
    name: 'ab',
    height: 159,
    gender: 'female',
  },
];

export const samplePeopleSorted = [
  {
    gender: 'n/a',
    characters: [
      { name: 'ab', height: 7 },
      { name: 'ab', height: 12 },
      { name: 'ab', height: 20 },
      { name: 'ab', height: 156 },
    ],
  },
  {
    gender: 'male',
    characters: [
      { name: 'luke skywalker', height: 123 },
      { name: 'some guy', height: 156 },
      { name: 'ab', height: 'unknown' },
      { name: 'ba', height: 'unknown' },
    ],
  },
  {
    gender: 'female',
    characters: [
      { name: 'ab', height: 126 },
      { name: 'ab', height: 136 },
      { name: 'ab', height: 157 },
      { name: 'ab', height: 158 },
      { name: 'ab', height: 159 },
    ],
  },
];
