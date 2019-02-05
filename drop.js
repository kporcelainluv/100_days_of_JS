//solution 1 via for loop and break statement
// function dropElements(arr, func) {
//   let res = arr.slice();
//   for (let i = 0; i <= arr.length; i++) {
//     if (func(arr[i])) {
//       break;
//     } else {
//       res.shift();
//       console.log(res);
//     }
//   }
//   return res;
// }

// solution 2 via findIndex
function dropElements(arr, func) {
  let index = arr.findIndex(func);
  console.log(index);
  if (index >= 0) {
    return arr.slice(index, arr.length);
  } else if (index === -1) {
    return [];
  }
}
console.log(
  dropElements([1, 2, 3], function(n) {
    return n > 0;
  })
);
