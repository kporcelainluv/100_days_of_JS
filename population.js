const nbYear = (p0, percent, aug, p) => {
  let count = 0;
  while (p0 < p) {
    p0 += (p0 / 100) * percent + aug;
    count += 1;
    if (p0 >= p) {
      break;
    }
  }
  return count;
};
console.log(nbYear(1500, 5, 100, 5000));
