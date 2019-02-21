function persistence(num) {
  count = 0;
  num = num.toString().split("");
  if (num.length === 1) {
    return count;
  } else {
    num = num.reduce((a, b) => parseInt(a) * parseInt(b));
    persistence(num);
    count += 1;
    return count;
  }
}
console.log(persistence(999));
