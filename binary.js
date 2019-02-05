function convertFromBinary(str) {
  str = str.split("").reverse();
  return str.reduce((res, currentElm, index) => {
    return res + parseInt(currentElm) * 2 ** index;
  }, 0);
}

function binaryAgent(str) {
  str = str.split(" ");
  let res = [];
  str.forEach(elem => {
    let number = convertFromBinary(elem);
    res.push(String.fromCharCode(number));
  });
  return res.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
