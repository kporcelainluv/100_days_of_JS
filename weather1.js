const makeProperArrs = (town, data) => {
  data = data.split("\n").map(elm => elm.split(","));
  let dataOfTown = data.filter(elm => elm[0].split(":")[0] === town)[0];
  return dataOfTown;
};

function mean(town, data) {
  data = makeProperArrs(town, data);
  if (!town || !data) {
    return -1;
  }
  let res = data.reduce((acc, elm) => {
    acc += parseFloat(elm.split(" ")[1]);
    return acc;
  }, 0);
  return res / data.length;
}
function variance(town, data) {
  constcountMean = mean(town, data);
  data = makeProperArrs(town, data);
  if (!town || !data) {
    return -1;
  }

  let difference = data
    .map(elm => (parseFloat(elm.split(" ")[1]) - constcountMean) ** 2)
    .reduce((a, b) => {
      return a + b;
    });
  return difference / data.length;
}
