function scramble(str1, str2) {
  str1 = str1.split("").sort();
  str2 = str2.split("").sort();

  let head = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[head]) {
      head += 1;
    }
  }
  //   return head;
  return head === str2.length ? true : false;
}

console.log(scramble("qbvijarbjawewm", "qarvjib")); //true);
console.log(scramble("cedewaraaossoqqyt", "codewars")); //true);
console.log(scramble("katas", "steak")); //false);
console.log(scramble("scriptjava", "javascript")); //true);
console.log(scramble("scriptingjava", "javascript")); //true);
console.log(scramble("scriptsjava", "javascripts")); //true);
console.log(scramble("jscripts", "javascript")); //false);
console.log(scramble("aabbcamaomsccdd", "commas")); //true);
