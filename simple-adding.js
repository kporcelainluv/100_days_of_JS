function SimpleAdding(num) {
  let arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  let sum = arr.reduce(function(result, num) {
    console.log(result, num);
    return result + num;
  }, 0);
}
SimpleAdding(4);
