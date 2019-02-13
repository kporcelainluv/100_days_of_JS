let checkOnlyAppropriate = str => {
  return /^[0-9-() ]+$/.test(str);
};
let checkZeroElm = str => {
  return /^[0-9(]/.test(str);
};
let countParan = (str, index) => {
  let count = 0;
  let flagCount = false;
  let closingFlag = true;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "(" || str[i] === ")") {
      count += 1;
    }
    if (str[i] === "(" && str[i + 4] != ")") {
      closingFlag = false;
    }
  }
  if (count % 2 === 0) {
    flagCount = true;
  }
  return flagCount && closingFlag;
};
function telephoneCheck(str) {
  if (checkOnlyAppropriate(str)) {
    if (countParan(str)) {
      if (checkZeroElm(str)) {
        let onlyNumStr = str.replace(/\D+/gi, "").split("");
        if (str[0] === "1") {
          if (onlyNumStr.length === 11) {
            return true;
          }
        } else if (onlyNumStr.length === 10) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(telephoneCheck("1 (555) 555-5555"));
