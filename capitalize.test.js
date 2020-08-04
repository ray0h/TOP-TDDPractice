import { capitalize } from './function-library';

test ('returns a string ', () => {
  expect(typeof(capitalize("string"))).toBe("string");
});

test ('capitalizes first letter of string', () => {
  expect(capitalize("string")).toMatch(/String/);
})

test ('throws error if argument not a string', () => {
  expect(() => capitalize(34)).toThrow();
  expect(() => capitalize(true)).toThrow();
})