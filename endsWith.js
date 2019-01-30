function confirmEnding(str, target) {
  let ending = str.slice(str.length - target.length, str.length);
  if (ending === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("He has to give me a new name", "name"));
