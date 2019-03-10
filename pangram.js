function isPangram(string) {
  string = string.toLowerCase().split("");
  let startingIndex = 97;
  while (startingIndex < 123) {
    if (string.indexOf(String.fromCharCode(startingIndex)) >= 0) {
      startingIndex += 1;
    } else {
      return false;
    }
  }
  return true;
}
var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
