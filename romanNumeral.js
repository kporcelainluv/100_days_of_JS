//заменить на map
function listOfWholeNums(num) {
  let divider = 10;
  let res = [];
  for (let i = 0; i <= num.toString().length; i++) {
    res.push(num % divider);
    num -= num % divider;
    divider *= 10;
  }
  return res.reverse();
}
let roman = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

function convertToRoman(num) {
  let res = [];
  let listOfNums = listOfWholeNums(num);
  listOfNums.forEach((elm, index) => {
    let idx = parseInt(num.toString()[index]) || elm;
    let power = elm / idx;
    console.log({ elm, idx, power });
    if (elm === 0) {
      res.push();
    } else if (roman.hasOwnProperty(elm)) {
      res.push(roman[elm]);
    } else if (roman.hasOwnProperty(elm - power)) {
      res.push(`${roman[elm - power]}${roman[power]}`);
    } else if (roman.hasOwnProperty(elm + power)) {
      res.push(`${roman[power]}${roman[elm + power]}`);
    } else {
      if (idx < 4) {
        res.push(roman[elm / idx].repeat(idx));
      } else {
        let moduleOf5 = elm % (5 * power);
        let timesToRep = moduleOf5 / power;
        res.push(
          `${roman[elm - moduleOf5]}${roman[moduleOf5 / timesToRep].repeat(
            timesToRep
          )}`
        );
      }
    }
    console.log(res);
  });
  //   return res.join("");
}

console.log(convertToRoman(8));
