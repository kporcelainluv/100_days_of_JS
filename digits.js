function digPow(n, p) {
  let numberInString = n.toString().split("");
  const sumOfNums = numberInString.reduce((acc, elm) => {
    acc += parseInt(elm) ** p;
    p += 1;
    return acc;
  }, 0);
  let res = 0;
  if (sumOfNums % n === 0) {
    res = sumOfNums / n;
  } else {
    res = -1;
  }
  return res;
}

console.log(digPow(92, 1));
