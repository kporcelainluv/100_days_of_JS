function twoSum(numbers, target) {
  let res = [];
  numbers.forEach((elm, index) => {
    for (let i = index; i < numbers.length; i++) {
      if (elm + numbers[i] === target && index != i) {
        res = [numbers.indexOf(elm), i];
      }
    }
  });
  return res;
}
console.log(twoSum([1234, 5678, 9012], 14690));
