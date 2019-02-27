const count = (arr, num) => {
  let count = 0;
  arr.forEach(elm => {
    if (elm === num) {
      count += 1;
    }
  });
  return count;
};

function findUniq(arr) {
  const res = arr.reduce((acc, elm) => {
    let amount = count(arr, elm);
    if (amount === 1) {
      acc.push(elm);
    }
    return acc;
  }, []);
  return res.join(" ");
}
findUniq([0, 1, 0]);
findUniq([1, 1, 1, 2, 1, 1]);
