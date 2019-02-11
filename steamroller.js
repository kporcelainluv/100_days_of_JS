function steamrollArray(arr) {
  let flat = [].concat(...arr);
  if (flat.some(elm => Array.isArray(elm))) {
    return steamrollArray(flat);
  } else {
    return flat;
  }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
