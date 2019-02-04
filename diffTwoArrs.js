// function diffArray(arr1, arr2) {
//   var newArr = arr1.concat(arr2);
//   let res = [];
//   newArr.forEach(x => {
//     if (!(arr2.includes(x) && arr1.includes(x))) {
//       res.push(x);
//     }
//   });
//   return res;
// }
// solution 2
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr
    .filter(x => !arr2.includes(x))
    .concat(newArr.filter(x => !arr1.includes(x)));
}
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
