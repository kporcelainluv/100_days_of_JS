// Return the output array, and ignore all non-op characters
let funcI = val => {
  return (val += 1);
};
let funcD = val => {
  return (val -= 1);
};
let funcS = val => {
  return val ** 2;
};
function parse(commands) {
  commands = commands.split("");
  let res = [];
  let initVal = 0;
  commands.forEach(command => {
    console.log(initVal, command);
    switch (command) {
      case "i":
        initVal = funcI(initVal);
        break;
      case "d":
        initVal = funcD(initVal);
        break;
      case "s":
        initVal = funcS(initVal);
        break;
      case "o":
        res.push(initVal);
        break;
    }
  });
  return res;
}
console.log(parse("iiisdoso"));
