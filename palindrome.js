function palindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[^A-Z0-9]/gi, "")
    .split("");
  return str.every((elm, index) => elm === str[str.length - (1 + index)]);
}

console.log(palindrome("race car"));
console.log(palindrome("nope"));
console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal.Panama"));
