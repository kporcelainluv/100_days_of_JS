let checkPositive = s => {
  if (s[0] < 0 && s[1] < 0) {
    return true;
  } else if (s[0] < 0 || s[1] < 0) {
    return false;
  }
  return true;
};
let countWholeAndLeft = s => {
  let left = s[0] % s[1];
  let whole = (s[0] - left) / s[1];
  return [whole, left];
};

function mixedFraction(s) {
  s = s.split("/");
  let flag = checkPositive(s);
  let resS = s.map(elm => Math.abs(parseInt(elm)));
  if (resS[1] === 0) {
    throw "zerodivisionerror";
  }
  [whole, left] = countWholeAndLeft(resS);
  if (!flag) {
    whole *= -1;
  }
  if (left === 0) {
    return whole.toString();
  } else {
    let res = [];
    res.push(left, resS[1]);
    let maxNum = Math.max(left, resS[1]);
    i = maxNum;
    while (true) {
      if (res[0] % i === 0 && res[1] % i === 0) {
        res = res.map(elm => elm / i);
        break;
      } else {
        i -= 1;
      }
      if (i === 0) {
        break;
      }
    }

    if (whole === 0) {
      if (!flag) {
        res[0] *= -1;
      }
      return `${res[0]}/${res[1]}`;
    } else {
      return `${whole} ${res[0]}/${res[1]}`;
    }
  }
}
console.log(mixedFraction("0/1999871"));
