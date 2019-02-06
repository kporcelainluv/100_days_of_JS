function orderWeight(nums) {
  let countNum = num => {
    return num.split("").reduce((res, element) => {
      return res + parseInt(element);
    }, 0);
  };

  nums = nums
    .split(" ")
    .map(elm => [countNum(elm), elm])
    .sort((a, b) => {
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
    })
    .map(([v, s]) => s)
    .join(" ");
}

console.log(orderWeight(" "));
