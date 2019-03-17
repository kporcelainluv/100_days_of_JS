function containAllRots(strng, arr) {
  let flag = true;
  let arrOfROts = [];
  arrOfROts.push(strng);
  for (let index = 1; index < strng.length; index++) {
    arrOfROts.push(
      strng.slice(-1 * index) + strng.slice(0, strng.length - index)
    );
  }
  arrOfROts.forEach(element => {
    if (arr.indexOf(element) === -1) {
      flag = false;
    }
  });
  return flag;
}

console.log(
  containAllRots("Ajylvpy", [
    "Ajylvpy",
    "ylvpyAj",
    "jylvpyA",
    "lvpyAjy",
    "pyAjylv",
    "vpyAjyl",
    "ipywee"
  ])
);
