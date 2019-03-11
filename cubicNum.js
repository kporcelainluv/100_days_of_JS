function posAverage(s) {
  s = s.split(", ");
  let str = [...s];
  let numOfSimilarities = 0;
  let numOfLetters = 0;
  str.forEach((elm, index, arr) => {
    elm = elm.split("");
    arr.slice(index + 1).forEach(element => {
      numOfLetters += elm.length;
      element = element.split("");
      elm.some((elm, ind) => {
        if (elm === element[ind]) {
          numOfSimilarities += 1;
        }
      });
    });
  });
  return (100 * numOfSimilarities) / numOfLetters;
}
s =
  "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490";
posAverage(s);
