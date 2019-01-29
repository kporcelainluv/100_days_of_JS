// attempt 1
function removeSmallest(numbers) {
  let myRes = numbers.slice();
  let myMin = Math.min(...numbers);
  let index = myRes.indexOf(myMin);
  myRes.splice(index, 1);
  console.log(myRes);
}
// attempt 2
function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  console.log(numbers.indexOf(min));
  console.log(numbers.filter((num, idx, arr) => idx !== numbers.indexOf(min)));
}
removeSmallest([5, 3, 2, 1, 4]);
