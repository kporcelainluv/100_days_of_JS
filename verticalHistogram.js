function verticalHistogramOf(s) {
  console.log(s);
  const filteredString = s
    .split("")
    .filter(elm => /[A-Z]/.test(elm))
    .sort();
  if (filteredString.length === 0) {
    return "";
  }

  let objOfLetters = {};
  filteredString.forEach(elm => {
    if (objOfLetters.hasOwnProperty(elm)) {
      objOfLetters[elm] += 1;
      return objOfLetters;
    } else {
      objOfLetters[elm] = 1;
      return objOfLetters;
    }
  });
  objOfLetters = Object.entries(objOfLetters);
  let max = Math.max(
    ...objOfLetters.reduce((acc, elm) => {
      acc.push(elm[1]);
      return acc;
    }, [])
  );
  let str = "";
  for (let i = max; i > 0; i--) {
    if (i < max) {
      str += "\n";
    }
    objOfLetters.reduce((acc, elm, index) => {
      if (elm[1] === i) {
        if (objOfLetters.indexOf(elm) === objOfLetters.length - 1) {
          str += "*";
        } else {
          str += "* ";
        }
        elm[1] -= 1;
      } else if (elm[1] < i) {
        str += "  ";
      }
    }, str);
  }
  str += "\n";
  objOfLetters.reduce((acc, elm, index) => {
    if (index === objOfLetters.length - 1) {
      str += elm[0];
      return str;
    } else {
      str += `${elm[0]} `;
      return str;
    }
  }, str);

  return str;
}
console.log(verticalHistogramOf("XXY YY ZZZ123ZZZ AAA BB C"));
