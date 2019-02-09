function fearNotLetter(str) {
  const res = str
    .toLowerCase()
    .split("")
    .map(elm => elm.charCodeAt())
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    })
    .reduce((prev, curr) => {
      if (typeof prev === "String") {
        return prev;
      }

      if (curr - prev > 1) {
        return String.fromCharCode(curr - 1);
      } else {
        return curr;
      }
    });

  return typeof res === "String" ? res : undefined;
}
console.log(fearNotLetter("abcde"));
