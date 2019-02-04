// function alphabeticalOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a > b;
//   });
// }
function alphabeticalOrder(arr) {
  // Add your code below this line
  var newArr = arr.sort();
  console.log(newArr);
  // Add your code above this line
  return newArr;
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
