function highAndLow(numbers) {
  numbers = numbers.split(" ").map(elm => parseInt(elm));
  let high = Math.max(...numbers);
  let low = Math.min(...numbers);
  return `${high} ${low}`;
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
