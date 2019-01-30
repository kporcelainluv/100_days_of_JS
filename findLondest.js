function findLongestWordLength(str) {
  str = str.split(" ");
  let res = str.sort(function(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (b.length > a.length) {
      return -1;
    }
    return 0;
  });
  return res.reverse[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
