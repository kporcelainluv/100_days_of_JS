function findEvenIndex(arr) {
  const reduceF = (res, x) => {
    const lastElem = res[res.length - 1];
    res.push(lastElem + x);
    return res;
  };

  const lefts = arr.reduce(reduceF, [0]);
  const rights = arr.reduceRight(reduceF, [0]);
  let res = -1;
  for (let i = 0; i < lefts.length - 1; i++) {
    if (lefts[i] === rights[rights.length - 2 - i]) {
      res = i;
      break;
    }
  }
  return res;
}
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([-3, -3, 3]));
