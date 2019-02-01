function isIsogram(str) {
  let res = str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/gi);

  return Boolean(res);
}
console.log(isIsogram("aba"));
isIsogram("aba");
