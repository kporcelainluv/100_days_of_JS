function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (sqrt % 1 != 0) {
    return -1;
  } else {
    sqrt += 1;
    return sqrt * sqrt;
  }
}
console.log(findNextSquare(144));
