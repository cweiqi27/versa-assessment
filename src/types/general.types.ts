export type NotKnownOrExist = 'unknown' | 'n/a';

export type AnyStringOrNotKnownOrExist =
  | Omit<string, NotKnownOrExist>
  | NotKnownOrExist;
