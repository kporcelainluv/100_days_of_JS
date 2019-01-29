// !!! Написать reduce, в котором фильтрация бузет использована в виде условных циклов

function positiveSum(arr) {
  let filtArr = arr.filter(x => x > 0);
  let res = 0;
  if (filtArr.length != 0) {
    res = filtArr.reduce(function(a, b) {
      return a + b;
    });
  }
  return res;
}

console.log(positiveSum([-1, 2, 3, 4, -5]));
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
