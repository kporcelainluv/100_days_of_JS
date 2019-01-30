// !!! Make range in JS
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

// mine
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  let arr = [];
  for (var i = 0; (i = num); i++) {
    arr.push(i);
  }
  let res = arr.reduce(function(a, b) {
    return a * b;
  });
  return res;
}

factorialize(5);
