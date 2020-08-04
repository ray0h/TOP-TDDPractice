import { reverseStr } from './function-library';

test ('returns a string', () => {
  expect(typeof(reverseStr("string"))).toBe("string");
})

test('reverses letters; dictionary => yranoitcid', () => {
  expect(reverseStr("dictionary")).toBe("yranoitcid");
})

test('reverses other characters; 3&8j)! => !)j8&3', () => {
  expect(reverseStr("3&8j)!")).toBe("!)j8&3");
})

test('throws error if non-string argument is passed', () => {
  expect(() => reverseStr({})).toThrow();
  expect(() => reverseStr(-513)).toThrow();
  expect(() => reverseStr(false)).toThrow();
})
