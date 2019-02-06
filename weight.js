function orderWeight(nums) {
  nums = nums.split(" ");
  let res = [];
  let countNum = num => {
    let res = 0;
    num.split("").forEach(element => {
      res += parseInt(element);
    });
    return res;
  };
  nums.map(elm => res.push([countNum(elm), elm]));
  res = res.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      if (a[1] > b[1]) {
        return 1;
      } else if (a[1] < b[1]) {
        return -1;
      }
      return 0;
    }
  });
  let arrWithFinalRes = res
    .reduce((cur, next) => {
      cur.push(next[1]);
      return cur;
    }, [])
    .join(" ");
  return arrWithFinalRes;
}
console.log(orderWeight(" "));
