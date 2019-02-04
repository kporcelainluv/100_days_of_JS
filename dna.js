function pairElement(str) {
  let res = [];
  let pairC = ["C", "G"];
  let pairG = ["G", "C"];
  let pairA = ["A", "T"];
  let pairT = ["T", "A"];
  str.split("").forEach(elem => {
    switch (elem) {
      case "C":
        res.push(pairC);
        break;
      case "G":
        res.push(pairG);
        break;
      case "A":
        res.push(pairA);
        break;
      case "T":
        res.push(pairT);
        break;
    }
  });
  return res;
}

console.log(pairElement("ATCGA"));
// solution 2
function pairElement(str) {
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let res = [];
  res = str.split("").map(x => [x, pairs[x]]);
  console.log(res);
}
console.log(pairElement("ATCGA"));
