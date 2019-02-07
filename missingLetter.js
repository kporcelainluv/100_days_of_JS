function fearNotLetter(str) {
  str = str
    .toLowerCase()
    .split("")
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    });
  let flag = undefined;
  for (let i = 1; i <= str.length - 1; i++) {
    if (str[i].charCodeAt() - str[i - 1].charCodeAt() != 1) {
      flag = String.fromCharCode(str[i].charCodeAt() - 1);
    }
  }
  return flag;
}
console.log(fearNotLetter("abce"));
