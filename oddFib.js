function sumFibs(num) {
  let res = [0, 1];
  while (res[res.length - 1] + res[res.length - 2] <= num) {
    res.push(res[res.length - 1] + res[res.length - 2]);
  }
  res = res
    .filter(elm => elm % 2 != 0)
    .reduce((val1, val2) => {
      return val1 + val2;
    });
  return res;
}
