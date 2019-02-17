// task link = https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
// not done, might re-do it in the future
let sumArrElms = (
  arrayOfDistances,
  maxKilometres,
  resArr,
  citiesAmount,
  intermidSum
) => {
  arrayOfDistances.forEach(elm => {
    if (intermidSum + elm <= maxKilometres && resArr.length <= citiesAmount) {
      resArr.push(elm);
      intermidSum += elm;
    }
  });
  return [arrayOfDistances, resArr, intermidSum];
};
let defineMaxMin = arrayOfDistances => {
  let maxNum = Math.max(...arrayOfDistances);
  let minNum = Math.min(...arrayOfDistances);
  let resArr = [maxNum, minNum];
  arrayOfDistances.splice(arrayOfDistances.indexOf(maxNum), 1);
  arrayOfDistances.splice(arrayOfDistances.indexOf(minNum), 1);
  let intermidSum = minNum + maxNum;
  return [arrayOfDistances, maxNum, minNum, resArr, intermidSum];
};

function chooseBestsum(maxKilometres, citiesAmount, arrayOfDistances) {
  [arrayOfDistances, maxNum, minNum, resArr, intermidSum] = defineMaxMin(
    arrayOfDistances
  );
  [arrayOfDistances, resArr, intermidSum] = sumArrElms(
    arrayOfDistances,
    maxKilometres,
    resArr,
    citiesAmount,
    intermidSum
  );
  if (resArr.length === citiesAmount && intermidSum <= maxKilometres) {
    return intermidSum;
  } else {
    return chooseBestsum(maxKilometres, citiesAmount, arrayOfDistances);
  }
}
var arrayOfDistances = [91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestsum(163, 3, arrayOfDistances));
