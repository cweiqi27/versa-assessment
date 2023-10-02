export type SwapiPageRes<T> =
  | {
      count: number;
      next: string | null;
      previous: string | null;
      results: T[];
    }
  | {
      detail: string;
    };
