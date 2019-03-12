function mirror(text) {
  text = text.split(" ");
  let maxNum = Math.max(...text.map(elm => elm.length));
  let amountOfStart = "";
  for (let i = 0; i < maxNum + 4; i++) {
    amountOfStart += `*`;
  }
  let arrOfReversed = [];
  text.forEach(element => {
    element = element.split("");
    arrOfReversed.push(
      element.reduceRight((acc, elm) => {
        acc += elm;
        return acc;
      }, "")
    );
  });
  let res = "";
  arrOfReversed.forEach((element, index) => {
    if (index === 0) {
      res += amountOfStart;
    }
    let whitespaces = maxNum + 4 - (2 + element.length);
    let mywhites = "";
    for (let i = 0; i < whitespaces - 1; i++) {
      mywhites += " ";
    }
    res += `\n* ${element}${mywhites}*`;
    if (index === arrOfReversed.length - 1) {
      res += "\n" + amountOfStart;
    }
  });
  return res;
}
mirror("Codewars");
