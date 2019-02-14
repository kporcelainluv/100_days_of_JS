var uniqueInOrder = function(str) {
  if (typeof str === "string") {
    str = str.split("");
  }
  str = str.filter((elm, idx) => str[idx + 1] != elm);
  return str;
};

console.log(uniqueInOrder("AAAABBBCCCDDD"));
