import { caesarCipher } from './function-library';

test ('if given a string, returns a string', () => {
  expect(typeof(caesarCipher("a string", 1))).toBe("string");
});

test ('shifts a single letter per offset', () => {
  expect(caesarCipher("c", 1)).toEqual("d");
});

test ('works with capital letters', () => {
  expect(caesarCipher("D", 3)).toEqual("G");
});

test ('works with words', () => {
  expect(caesarCipher("Aaa", 2)).toEqual("Ccc");
});

test ('works with phrases/punctuation', () => {
  expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});

test ('works with negative shift', () => {
  expect(caesarCipher('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
});

test ('wraps letters', () => {
  expect(caesarCipher('Z', 1)).toEqual('A');
});

test ('works with large offset shifts', () => {
  expect(caesarCipher('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});

test ('works with large negative offset shifts', () => {
  expect(caesarCipher('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});
