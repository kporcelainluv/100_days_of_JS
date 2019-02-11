function createAr(start, end) {
  let res = [];
  let i = start;
  while (i <= end) {
    res.push(i);
    i++;
  }
  return res;
}
function sortArray(arr) {
  arr = arr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });
  return arr;
}

function smallestCommons(arr) {
  let j = 1;
  arr = sortArray(arr);
  let res = createAr(arr[0], arr[1]);
  while (true) {
    if (res.every(elm => j % elm === 0)) {
      break;
    } else {
      j++;
    }
  }
  return j;
}

console.log(smallestCommons([23, 18]));
