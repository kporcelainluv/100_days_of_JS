function destroyer(arr) {
  let myArr = arguments[0];
  let numsToDelete = [...arguments].slice(1);
  return myArr.filter(x => numsToDelete.indexOf(x) === -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
