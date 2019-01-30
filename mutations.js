function mutation(arr) {
  let flag = true;
  let word = arr[0].toLowerCase().split("");

  let mutationWord = arr[1].toLowerCase().split("");
  mutationWord.forEach(element => {
    if (!word.includes(element)) {
      flag = false;
    }
  });
  return flag;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcb", "aaa"]));
