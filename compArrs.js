function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }

  if (array1.length === 0 || array2.length === 0) {
    return true;
  }

  let flag = true;
  array1.forEach((element, index) => {
    if (array2.indexOf(element ** 2) === -1) {
      flag = false;
    } else {
      array2.splice(array2.indexOf(element ** 2), 1);
    }
  });
  return flag;
}
console.log(comp([], []));
