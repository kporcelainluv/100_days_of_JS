const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => {
  "use strict";
  arr = arr.filter(num => num >= 0 && num % 1 === 0);
  let squaredIntegers = arr.map(num => num ** 2);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
