function addTogether() {
  const numCheck = num => {
    if (typeof num === "number") {
      return num;
    } else {
      return undefined;
    }
  };
  let res = 0;
  if (arguments.length === 1 && numCheck(arguments[0])) {
    return arg => {
      if (numCheck(arg)) {
        return arguments[0] + arg;
      }
    };
  } else if (arguments.length > 1) {
    let myArr = Array.from(arguments);
    myArr = myArr.filter(elm => numCheck(elm));
    if (myArr.length === arguments.length) {
      myArr.forEach(element => {
        res += element;
      });
      return res;
    }
  }
}

console.log(addTogether(2)([3]));
