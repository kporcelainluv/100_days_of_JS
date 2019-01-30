function getIndexToIns(arr, num) {
  let res = 0;
  arr = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  console.log(arr);
  if (arr.indexOf(num) > -1) {
    return arr.indexOf(num);
  }
  arr.forEach((element, index) => {
    if (element < num && arr[index + 1] > num) {
      res = index + 1;
      return res;
    }
  });
  if (arr[arr.length - 1] < num) {
    res = arr.length;
  }
  return res;
}

console.log(getIndexToIns([2, 5, 10], 15));
