// via repeat
// function repeatStringNumTimes(str, num) {
//   if (num < 0) {
//     return [];
//   }
//   return str.repeat(num);
// }

// console.log(repeatStringNumTimes("abc", 3));
// via while loop
// function repeatStringNumTimes(str, num) {
//   let res = "";
//   let i = 0;
//   while (i < num) {
//     res += str;
//     i++;
//   }
//   return res
// }

// console.log(repeatStringNumTimes("abc", 3));

//via recursion
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return [];
  }
  if (num === 1) {
    return str;
  } else {
    return (str += repeatStringNumTimes(str, num - 1));
  }
  return str;
}

console.log(repeatStringNumTimes("abc", 3));
