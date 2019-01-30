function squareDigits(num) {
  num = num.toString().split("");
  num = num.reduce((res, elem) => {
    res.push(elem ** 2);
    return res;
  }, []);
  return parseInt(num.join(""));
}
console.log(squareDigits(9119));
