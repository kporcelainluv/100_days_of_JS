let makeCollection = num => {
  let arr = [];
  let i = 2;
  while (arr.length < num - 1) {
    arr.push(i);
    i++;
  }
  return arr;
};
let checkElement = num => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && num != i) {
      return false;
    }
  }
  return true;
};

function sumPrimes(num) {
  let arr = makeCollection(num)
    .filter(elm => checkElement(elm))
    .reduce((elm1, elm2) => {
      return elm1 + elm2;
    });
  return arr;
}

console.log(sumPrimes(977));
