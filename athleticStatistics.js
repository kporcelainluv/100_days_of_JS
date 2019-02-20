let convertToSeconds = arr => {
  arr = arr.map(elm => parseInt(elm));
  let seconds = arr[2];
  seconds += arr[1] * 60;
  seconds += arr[0] * 60 * 60;
  return seconds;
};

let countRange = arr => {
  const secondsMin = Math.min(...arr);
  const secondsMax = Math.max(...arr);
  return secondsMax - secondsMin;
};
let convertToString = seconds => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  seconds = Math.floor(seconds % 60);
  let res = [hrs, mins, seconds];
  res = res.map(elm => {
    elm = elm.toString();
    if (elm.length === 1) {
      return `0${elm}`;
    }
    return elm;
  });
  return res.join("|");
};
let countMean = arr => {
  const length = arr.length;
  arr = arr.reduce((a, b) => a + b);
  return arr / length;
};

const findMedian = arr => {
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  const length = arr.length;
  if (length % 2 != 0) {
    return arr[Math.floor(length / 2)];
  } else {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
};

function stat(strg) {
  if (strg === "") {
    return "";
  }
  strg = strg.split(",").map(elm => elm.split("|"));
  let secondsArr = strg.map(elm => convertToSeconds(elm));
  let rangeSeconds = convertToString(countRange(secondsArr));
  let meanSeconds = convertToString(countMean(secondsArr));
  let medianSeconds = convertToString(findMedian(secondsArr));
  const res = `Range: ${rangeSeconds} Average: ${meanSeconds} Median: ${medianSeconds}`;
  return res;
}
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
