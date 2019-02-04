function myReplace(str, before, after) {
  str = str.split(" ");
  let replaceIdx = str.indexOf(before);
  if (/[A-Z]/.test(str[replaceIdx][0])) {
    after = after[0].toUpperCase() + after.slice(1, after.length);
    console.log(after);
  }
  str.splice(replaceIdx, 1, after);
  return str.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
