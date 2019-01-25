function AlphabetSoup(str) {
  str = str.split("");
  str.sort(function(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  return str.join("");
}
AlphabetSoup("hello");
