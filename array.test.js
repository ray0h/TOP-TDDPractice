import { arrStats } from './function-library';

test ('returns an object', () => {
  expect(typeof( arrStats([1, 8, 3, 4, 2, 6]) )).toBe("object");
});

test ('returns an object with 4 elements', () => {
  expect(Object.keys(arrStats([1, 8, 3, 4, 2, 6])).length).toBe(4);
});

test ('contains a key "average" and returns the average of numbers in array', () => {
  expect(Object.keys(arrStats([1, 8, 3, 4, 2, 6]))).toContain("average");
  expect(arrStats([1, 8, 3, 4, 2, 6]).average).toEqual(4);
});

test ('contains a key "min" and returns the minimum value in array', () => {
  expect(Object.keys(arrStats([1, 8, 3, 4, 2, 6]))).toContain("min");
  expect(arrStats([1, 8, 3, 4, 2, 6]).min).toEqual(1);
});

test ('contains a key "max" and returns the maximum value in array', () => {
  expect(Object.keys(arrStats([1, 8, 3, 4, 2, 6]))).toContain("max");
  expect(arrStats([1, 8, 3, 4, 2, 6]).max).toEqual(8);
});

test ('contains a key "length" and returns the length of elements in array', () => {
  expect(Object.keys(arrStats([1, 8, 3, 4, 2, 6]))).toContain("length");
  expect(arrStats([1, 8, 3, 4, 2, 6]).length).toEqual(6);
});