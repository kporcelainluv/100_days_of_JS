function* createFibs() {
  let firstArg = 0;
  let secondArg = 1;
  let res;
  while (true) {
    res = firstArg + secondArg;
    yield res;
    firstArg = secondArg;
    secondArg = res;
  }
}

const sumFibs = num => {
  let res = [0, 1];
  let generator = createFibs();
  while (res[res.length - 1] + res[res.length - 2] <= num) {
    let fib = generator.next().value;
    res.push(fib);
  }
  res = res
    .filter(elm => elm % 2 != 0)
    .reduce((a, b) => {
      return a + b;
    });
  return res;
};
console.log(sumFibs(4000000));
