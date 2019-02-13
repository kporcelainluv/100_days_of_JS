let applyShifer = letter => {
  let currentLetterCode = letter.charCodeAt();
  if (currentLetterCode < 65) {
    return letter;
  } else if (currentLetterCode + 13 > 90) {
    currentLetterCode = 65 + ((currentLetterCode + 13) % 91);
  } else {
    currentLetterCode += 13;
  }
  letter = String.fromCharCode(currentLetterCode);
  return letter;
};
function rot13(str) {
  str = str
    .toUpperCase()
    .split("")
    .map(elm => applyShifer(elm))
    .join("");
  return str;
}

console.log(rot13("SERR CVMMN!"));
