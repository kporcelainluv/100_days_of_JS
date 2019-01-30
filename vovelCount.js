function getCount(str) {
  str = str.replace(/\s/g, "");
  let res = str.match(/[a, e, i, o,u]/gi);
  if (res === null) {
    return 0;
  } else {
    return res.length;
  }
}
console.log(getCount("my pyx"));
