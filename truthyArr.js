// function truthCheck(collection, pre) {
//   let flag = true;
//   collection.forEach(element => {
//     if (!element[pre]) {
//       flag = false;
//     }
//   });
//   return flag;
// }
function truthCheck(collection, pre) {
  collection = collection.filter(x => !x[pre]);
  return collection.length === 0;
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po" }
    ],
    "sex"
  )
);
