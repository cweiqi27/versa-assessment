import { Transformers } from '../transformers.utils';

describe('Transformers', () => {
  describe('snakeToCamel', () => {
    it('should convert a string with snake case to camel case', () => {
      expect(Transformers.snakeToCamel('snake_case')).toEqual('snakeCase');
    });
  });

  describe('convertKeysToCamelCase', () => {
    it('should convert all keys of an object to camel case', () => {
      const sampleSnake = {
        some_keys: [
          {
            another_keys: 'foo',
            foo_bar: {
              bar_baz: 'foo',
            },
          },
        ],
      };

      const sampleCamel = {
        someKeys: [
          {
            anotherKeys: 'foo',
            fooBar: {
              barBaz: 'foo',
            },
          },
        ],
      };

      const convertKeysToCamelCase =
        Transformers.convertKeysToCamelCase(sampleSnake);

      expect(convertKeysToCamelCase).toEqual(sampleCamel);
    });
  });
});
