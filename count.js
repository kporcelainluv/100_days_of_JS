const sequenceSum = (begin, end, step) => {
  let res = 0;
  for (let i = begin; i <= end; i += step) {
    console.log(i);
    res += i;
    console.log({ res });
  }
  return res;
};
console.log(sequenceSum(2, 6, 2));
