const binaryArrayToNumber = arr => {
  return arr.reduceRight((res, nextElm, index) => {
    return res + nextElm * Math.pow(2, arr.length - 1 - index);
  }, 0);
};
console.log(binaryArrayToNumber([1, 0, 1, 1]));
