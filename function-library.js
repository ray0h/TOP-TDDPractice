// Function 1. Capitalize first letter of string
export function capitalize (string) {
  if (typeof(string) === "string") {
    return string[0].toUpperCase() + string.slice(1,);
  } else {
    throw new Error("argument is not a string");
  }
};

// Function 2. Reverse letters of string
export function reverseStr (string) {
  if (typeof(string) === "string") {
    return string
      .split("")
      .reverse()
      .join("");
  } else { 
    throw new Error ("argument is not a string")
  }
};

// Function 3. Calculator object
const Calculator = () => {
  const add = (x,y) => x + y;
  const sub = (x,y) => x - y;
  const mult = (x,y) => x * y;
  const div = (x,y) => x / y;
  return { add, sub, mult, div }
};

export const calculator = Calculator();

// Function 4. Caesar Cipher
export function caesarCipher(string, offset) {
  function shift(start, num) {
    //utf for lowercase a-z
    let low = 97;
    let high = 122;
    let final = start;
    if (start < 65 || start > 122 || (start > 90 && start < 97) || num == 0) {
      return start; 
    } else if (start >= 65 && start <= 90) {
        low = 65;
        high = 90;
    }
    final += num;
    if (num > 0) {
      while (final > high) {
        final -= 26;
      }
    } else if (num < 0) { 
      while (final < low) {
        final += 26;
      }
    }
    return final;
  }

  return string
    .split("")
    .map(char => char.charCodeAt(0))
    .map(char => shift(char, offset))
    .map(char => String.fromCharCode(char))
    .join(""); 
};

// Function 5. Array Analysis

export function arrStats (arr) {
  let average = arr.reduce((prev, next) => prev + next, 0) / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  return { average, min, max, length };
};