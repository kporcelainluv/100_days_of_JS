function chunkArrayInGroups(arr, size) {
  let res = [];
  for (var i = 0; i <= arr.length - 1; i += size) {
    res.push(arr.slice(i, i + size));
  }
  console.log(res);
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
