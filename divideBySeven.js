function seven(m) {
  m = m.toString().split("");
  let count = 0;
  while (m.length > 2) {
    count += 1;
    let lastDigit = parseInt(m[m.length - 1]);
    m = parseInt(m.slice(0, m.length - 1).join(""));
    m -= lastDigit * 2;
    console.log(m);
    m = m.toString().split("");
  }
  m = parseInt(m.join(""));
  return [m, count];
}
console.log(seven(3047045));
