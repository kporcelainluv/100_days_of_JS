//Yanis HELP https://www.codewars.com/kata/directions-reduction/train/javascript
let opposite = {
  NORTH: "SOUTH",
  EAST: "WEST",
  SOUTH: "NORTH",
  WEST: "EAST"
};

function dirReduc(arr) {
  let res = arr.filter(
    (elm, index, arr) =>
      (arr[index + 1] != opposite[elm] && opposite[arr[index - 1]] !== elm) ||
      false
  );
  if (res.length === arr.length) {
    return res;
  } else {
    return dirReduc(res);
  }
}
console.log(
  dirReduc([
    "EAST",
    "EAST",
    "WEST",
    "NORTH",
    "WEST",
    "EAST",
    "EAST",
    "SOUTH",
    "NORTH",
    "WEST"
  ])
);
