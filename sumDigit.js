// https://www.codewars.com/kata/55f5efd21ad2b48895000040/train/javascript
function maxSumDig(nmax, maxsm) {
  var start = 1000;
  var arrOfMaxNums = [];
  first: for (var i = start; i <= nmax; i++) {
    var str = i.toString();
    var test = 0;
    for (var k = 0; k < str.length - 3; k++) {
      test =
        Number(str[k]) +
        Number(str[k + 1]) +
        Number(str[k + 2]) +
        Number(str[k + 3]);

      if (test > maxsm) {
        continue first;
      }
    }
    arr.push(i);
  }

  let numOfMaxNums = arrOfMaxNums.length;
  let sumOfMaxNums = arrOfMaxNums.reduce((a, b) => {
    return a + b;
  });
  let middle = sumOfMaxNums / numOfMaxNums;
  let filteredArr = arrOfMaxNums.filter(x => x < middle);
  let res = "";
  if (
    middle - filteredArr[filteredArr.length - 1] >
    arrOfMaxNums[filteredArr.length] - middle
  ) {
    res = arrOfMaxNums[filteredArr.length];
  } else {
    res = filteredArr[filteredArr.length - 1];
  }
  return [numOfMaxNums, res, sumOfMaxNums];
}
console.log(maxSumDig(4000, 4));
