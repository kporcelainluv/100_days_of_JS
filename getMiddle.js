function getMiddle(s) {
  if (s.length % 2 === 0) {
    let division = (s.length - 2) / 2;
    return s.slice(division, division + 2);
  } else if (s.length % 2 != 0) {
    let division = (s.length - 1) / 2;
    return s.slice(division, division + 1);
  }
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
