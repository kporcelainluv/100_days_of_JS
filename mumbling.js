const multiplyLetterByNum = (letter, num) => {
  let res = letter.toUpperCase();
  letter = letter.toLowerCase();
  for (let i = 1; i <= num; i++) {
    res += letter;
  }
  return res;
};

function accum(str) {
  str = str.split("");
  let res = str.reduce((acc, elm, index) => {
    acc.push(multiplyLetterByNum(elm, index));
    return acc;
  }, []);
  return res.join("-");
}
console.log(accum("ZpglnRxqenU"));
