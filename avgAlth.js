function orbitalPeriod(arr) {
  let getOrbPeriod = obj => {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let avgAlth = obj["avgAlt"];
    let pi = Math.PI;
    let res = 2 * pi * Math.sqrt((earthRadius + avgAlth) ** 3 / GM);
    delete obj["avgAlt"];
    obj["orbitalPeriod"] = Math.round(res);
    return obj;
  };
  for (var index in arr) {
    arr[index] = getOrbPeriod(arr[index]);
  }
  return arr;
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
