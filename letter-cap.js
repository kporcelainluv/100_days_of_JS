// 1st
// function LetterCapitalize(str) {
//   let arr = [];
//   str.split(" ").forEach(elm => {
//     elmZero = elm[0].toUpperCase();
//     elm = elmZero + elm.slice(1, elm.length);
//     arr.push(elm);
//   });
//   return arr.join(" ");
// }

// 2nd
function LetterCapitalize(str) {
  return str
    .split(" ")
    .map(([fl, ...other]) => [fl.toUpperCase(), ...other].join(""))
    .join(" ");
}
console.log(LetterCapitalize("hello beautiful world"));
