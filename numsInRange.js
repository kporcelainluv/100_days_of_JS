function sumAll(arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr = newArr.concat([i]);
  }
  newArr = newArr.reduce((current, next) => {
    return current + next;
  });
  return newArr;
}

console.log(sumAll([10, 5]));
