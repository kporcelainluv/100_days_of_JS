var remover = function(obj, val) {
  for (key in obj) {
    let pos = obj[key].indexOf(val);
    if (pos !== -1) {
      obj[key] = obj[key].slice(0, pos).concat(obj[key].slice(pos + 1));
    }
  }
};

var recoverSecret = function(triplets) {
  let secret = [];
  let r = {};
  let keys;
  const lastLetter = [];
  triplets.forEach((val, ind) => {
    keys = Object.keys(r);
    if (keys.includes(val[0])) {
      if (!r[val[0]].includes(val[1])) r[val[0]].push(val[1]);
      if (!r[val[0]].includes(val[2])) r[val[0]].push(val[2]);
    } else {
      r[val[0]] = [val[1], val[2]];
    }

    if (keys.includes(val[1])) {
      if (!r[val[1]].includes(val[2])) r[val[1]].push(val[2]);
    } else {
      r[val[1]] = [val[2]];
    }

    if (!lastLetter.includes(val[2])) lastLetter.push(val[2]);
  });
  keys = Object.keys(r);
  let finalLetter;
  lastLetter.forEach(val => {
    if (!keys.includes(val)) finalLetter = val;
  });
  let finish = [];
  let pos2;
  console.log("BEFORE", r);
  secret.unshift(finalLetter);
  while (keys.length) {
    for (key in r) {
      if (r[key].length == 1 && r[key] == finalLetter) {
        secret.unshift(key);
        console.log(finalLetter);

        finalLetter = key;
        console.log("FINAL LETTER", finalLetter);
        console.log(keys);
        pos2 = keys.indexOf(finalLetter);
        remover(r, finalLetter);
      }
    }
    console.log(keys);
    console.log(pos2);
    if (keys.length > 1) {
      keys = keys.slice(0, pos2).concat(keys.slice(pos2 + 1));
    } else {
      break;
    }
  }

  console.log("AFTER", r);
  return secret.join("");
};

recoverSecret([
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
]);
