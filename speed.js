function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  let res = x.reduce((acc, elm, index, arr) => {
    acc.push((3600 * (arr[index + 1] - elm)) / s);
    return acc;
  }, []);
  res = res.slice(0, res.length - 1);
  return Math.floor(Math.max(...res));
}
var x = [
  0.0,
  0.11,
  0.22,
  0.33,
  0.44,
  0.65,
  1.08,
  1.26,
  1.68,
  1.89,
  2.1,
  2.31,
  2.52,
  3.25
];
var s = 12;
var u = 41;
console.log("Result", gps(s, x));
