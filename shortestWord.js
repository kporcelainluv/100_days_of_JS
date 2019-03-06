function findShort(s) {
  s = s.split(" ").sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    }
    return 0;
  });
  return s[0].length;
}
findShort("bitcoin take over the world maybe who knows perhaps");
