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

  return str.slice(1).reduce(
    ([prevL, foundL], currL) => {
      if (currL.charCodeAt() - prevL.charCodeAt() != 1) {
        return [0, String.fromCharCode(currL.charCodeAt() - 1)];
      } else if (foundL) {
        return [0, foundL];
      } else {
        return [currL, null];
      }
    },
    [str[0], null]
  )[1];
}
console.log(fearNotLetter("abce"));
