function findElement(arr, func) {
  let num = 0;
  for (let current in arr) {
    if (func(arr[current])) {
      num = arr[current];
      return num;
    }
  }
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function(num) {
    return num % 2 === 0;
  })
);
