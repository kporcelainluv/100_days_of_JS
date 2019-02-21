const countElm = arr => {
  const arrayOfRepeats = {};
  arr.forEach(element => {
    if (arrayOfRepeats.hasOwnProperty(element)) {
      arrayOfRepeats[element] = arrayOfRepeats[element] + 1;
    } else {
      arrayOfRepeats[element] = 1;
    }
  });
  return arrayOfRepeats;
};

function deleteNth(arr, n) {
  if (!arr.length) {
    return [];
  }
  const res = [arr[0]];
  arr.slice(1).reduce((acc, elm) => {
    if (acc.indexOf(elm) === -1) {
      acc.push(elm);
      return acc;
    } else {
      if (countElm(acc)[elm.toString()] < n) {
        acc.push(elm);
        return acc;
      }
      return acc;
    }
  }, res);
  return res;
}
