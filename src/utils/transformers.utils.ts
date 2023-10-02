export class Transformers {
  static convertKeysToCamelCase<T>(obj: T): unknown {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.convertKeysToCamelCase(item));
    } else if (typeof obj === 'object' && obj !== null) {
      const newObj: Record<string, unknown> = {};
      for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
          const newKey = this.snakeToCamel(key);
          newObj[newKey] = this.convertKeysToCamelCase(
            obj[key] as Record<string, unknown>,
          );
        }
      }
      return newObj;
    } else {
      return obj;
    }
  }

  static snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (_, group1) => group1.toUpperCase());
  }
}
