function findEvenIndex(arr) {
  let myRes = -1;
  arr.forEach((elm, index) => {
    let myArr1 = arr.slice(0, index);
    let myArr2 = arr.slice(index + 1, arr.length);

    let myArr1Sum = 0;
    let myArr2Sum = 0;

    myArr1Sum = myArr1.reduce((sum, num) => {
      return sum + num;
    }, 0);

    myArr2Sum = myArr2.reduce((sum, num) => {
      return sum + num;
    }, 0);

    if (myArr1Sum === myArr2Sum) {
      myRes = index;
    }
  });
  return myRes;
}
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
