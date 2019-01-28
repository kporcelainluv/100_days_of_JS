function GetSum(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  const myArr = [];
  for (var i = a; i <= b; i++) {
    myArr.push(i);
  }
  const result = myArr.reduce((sum, current) => {
    return sum + current;
  }, 0);
  return result;
}
console.log(GetSum(6, 1));
