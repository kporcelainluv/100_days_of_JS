function LetterChanges(str) {
  let newStr = str.split("");
  let res = [];
  newStr.forEach(function(element) {
    elASCINum = element.charCodeAt(0);
    if (/[a-zA-Z]/.test(element)) {
      newElement = String.fromCharCode(elASCINum + 1);
      if (["a", "e", "i", "o", "u"].includes(newElement)) {
        res.push(newElement.toUpperCase());
      } else {
        res.push(newElement);
      }
    } else {
      res.push(element);
    }
  });
  return res.join("");
}
console.log(LetterChanges("fun times!"));
