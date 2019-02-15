// link https://www.codewars.com/kata/simplifying-multilinear-polynomials/train/javascript

let elmLetterNegPos = poly => {
  console.log(poly);
  let posNeg = "+";
  if (poly[0] === "-" || poly[0] === "+") {
    if (poly[0] === "-") {
      posNeg = "-";
    }
    poly = poly.slice(1);
  }
  if (poly.length === 1) {
    return [posNeg, 1, poly.sort().join("")];
  }
  let elmVal =
    poly
      .join("")
      .split(/\D+/)
      .sort()
      .join("") || "1";
  let elmLetter = poly
    .join("")
    .split(/\d+/)
    .join("")
    .split("")
    .sort()
    .join("");

  console.log(elmLetter);
  return [posNeg, parseInt(elmVal), elmLetter];
};
function simplify(poly) {
  poly = poly
    .split(/(?=[+-])/g)
    .map(elm => elm.split(""))
    .reduce((acc, elm) => {
      [posNeg, elmVal, elmLetter] = elmLetterNegPos(elm);
      console.log(posNeg, elmVal, elmLetter);
      if (posNeg === "-") {
        elmVal *= -1;
      }
      if (acc.has(elmLetter)) {
        return acc.set(elmLetter, acc.get(elmLetter) + elmVal);
      } else {
        return acc.set(elmLetter, elmVal);
      }
    }, new Map());
  console.log(poly);
  let res = [];
  console.log(poly);
  for (i of poly) {
    if (i[1] === 0) {
      //pass
    } else if (i[1] === 1) {
      res.push("+" + i[0]);
    } else if (i[1] === -1) {
      res.push("-" + i[0]);
    } else {
      if (i[1] < 0) {
        res.push(`${i[1]}${i[0]}`);
      } else {
        res.push(`+${i[1]}${i[0]}`);
      }
    }
  }
  console.log(res);
  res = res.sort((a, b) => {
    if (a[0] === "-" || a[0] === "+") {
      a = a.slice(1);
    }
    if (b[0] === "-" || b[0] === "+") {
      b = b.slice(1);
    }
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else if (a.length === b.length) {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      } else if (a[0] === b[0]) {
        if (a[1] > b[1]) {
          return 1;
        }
        return -1;
      }
    }
  });

  res = res.join("");
  if (res[0] === "+") {
    res = res.slice(1);
  }
  return res;
}
console.log(simplify("+2cax-1x-3ax-12x-4ax+5ax+1ax"));
