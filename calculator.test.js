import { calculator } from './function-library';

test ('calculator is an object', () => {
  expect(typeof(calculator)).toBe("object");
});

test ('calculator has an "add" method; returns 2+4=6', () => {
  expect(Object.keys(calculator)).toContain("add");
  expect(calculator.add(2,4)).toBe(6);
})

test ('calculator has a "sub"(tract) method; returns 10-3=7', () => {
  expect(Object.keys(calculator)).toContain("sub");
  expect(calculator.sub(10,3)).toBe(7);
})

test ('calculator has a "mult"(iply) method; returns 3*9=27', ()=> {
  expect(Object.keys(calculator)).toContain("mult");
  expect(calculator.mult(3,9)).toBe(27);
});

test ('calculator has a "div"(ide) method; returns 63/-9=-7', () => {
  expect(Object.keys(calculator)).toContain("div");
  expect(calculator.div(63,-9)).toBe(-7);
})