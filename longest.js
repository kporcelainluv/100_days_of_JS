// 1 using new Set
function longest(s1, s2) {
  let res = new Set((s1 + s2).split(""));
  let newRes = [...res].sort(function(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  return newRes;
}
// 2 using reduce
function longest(s1, s2) {
  let newStr = (s1 + s2).split("");
  newStr = newStr.sort(function(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  let res = newStr.reduce(function(out, current, index) {
    if (index === 0) {
      return out;
    }
    if (current != out[out.length - 1]) {
      out.push(current);
    }
    return out;
  }, newStr.slice(0, 1));
  console.log(res);
}
