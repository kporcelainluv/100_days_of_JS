function* myFunc(i) {
  console.log(i);
  const j = 5 * (yield i * 10);
  console.log(j);
  const k = yield (2 * j) / 4;
  console.log(k);
  return i + j + k;
}

let gen = myFunc(10);
console.log(myFunc(20).next());
console.log(myFunc(10).next());
console.log(myFunc(5).next());
