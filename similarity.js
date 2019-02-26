//www.codewars.com/kata/t-dot-t-t-dot-29-similarity-evaluation-of-two-strings/train/javascript
var checkLength = (s1, s2) => {
  if (s1.length === s2.length) {
    return 10;
  }
  return 0;
};

const checkFirstAndLastLetter = (s1, s2) => {
  if (s1.length >= 2 && s2.length >= 2) {
    if (s1[0] === s2[0]) {
      if (s1[s1.length - 1] === s2[s2.length - 1]) {
        return 20;
      }
    }
  }
  return 0;
};

const checkSameNumOfLetters = (s1, s2) => {
  s1 = s1.replace(/[0-9]/gi, "");
  s2 = s2.replace(/[0-9]/gi, "");
  if (s1.length === s2.length) {
    return 5;
  }
  return 0;
};
const checkSameNumOfNums = (s1, s2) => {
  s1 = s1.replace(/\D/gi, "");
  s2 = s2.replace(/\D/gi, "");
  if (s1.length === s2.length) {
    return 5;
  }
  return 0;
};
const checkNumOfWords = (s1, s2) => {
  s1 = s1.split(" ");
  s2 = s2.split(" ");

  if (s1.length <= 1 && s2.length <= 1) {
    return 0;
  }
  if (s1.length === s2.length) {
    return 5;
  }
  return 0;
};

const checkAscending = arr => {
  return arr
    .slice(1)
    .map((e, i) => e > arr[i])
    .every(x => x);
};
const checkDescending = arr => {
  return arr
    .slice(1)
    .map((e, i) => e < arr[i])
    .every(x => x);
};
const checkAscii = (s1, s2) => {
  s1 = s1.split("").reduce((acc, elm) => {
    acc.push(elm.charCodeAt());
    return acc;
  }, []);
  s2 = s2.split("").reduce((acc, elm) => {
    acc.push(elm.charCodeAt());
    return acc;
  }, []);
  let ascending1 = checkAscending(s1);
  let ascending2 = checkAscending(s2);
  let decending1 = checkDescending(s1);
  let decending2 = checkDescending(s2);
  if ((ascending1 && ascending2) || (decending1 && decending2)) {
    return 10;
  }
  return 0;
};
const checkAsciiSum = (s1, s2) => {
  s1 = s1.split("").reduce((acc, elm) => {
    acc += elm.charCodeAt();
    return acc;
  }, 0);
  s2 = s2.split("").reduce((acc, elm) => {
    acc += elm.charCodeAt();
    return acc;
  }, 0);
  if (s1 === s2) {
    return 20;
  }
  return 0;
};
const checkReverseCase = (s1, s2) => {
  s1 = s1
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  s2 = s2.toLowerCase();
  if (s1 === s2) {
    return 20;
  }
  return 0;
};

const checkPalindrome = (s1, s2) => {
  const palidrome1 = s1
    .split("")
    .reverse()
    .join("");
  const palidrome2 = s2
    .split("")
    .reverse()
    .join("");
  if (palidrome1 === s1 && palidrome2 === s2) {
    return 10;
  }
  return 0;
};

const identicalChar = (s1, s2) => {
  const setOfBoth = Array.from(new Set(s1.concat(...s2)));
  if (setOfBoth.length === 1) {
    if (s1[0] === s2[0]) {
      return 40;
    }
  }
  return 0;
};

const checkDifferenceOfCHars = (s1, s2) => {
  let res = [];
  s1 = s1.split("");
  s2 = s2.split("");
  s1.forEach(elm => {
    if (s2.indexOf(elm) === -1) {
      res.push(elm);
    }
  });
  if (res.length === 1) {
    return 30;
  }
  return 0;
};

const containSameLetters = (s1, s2) => {
  s1 = s1.replace(/\W/gi, "").split("");
  s2 = s2.replace(/\W/gi, "").split("");
  const lettersFromBothArrs = Array.from(new Set(s1.concat(s2)));
  let counter = 0;
  lettersFromBothArrs.forEach(elm => {
    if (s1.indexOf(elm) >= 0 && s2.indexOf(elm) >= 0) {
      counter += 2;
    }
  });
  if (counter > 10) {
    return 10;
  } else if (counter <= 10) {
    return counter;
  }
};
const containSameNumbers = (s1, s2) => {
  s1 = s1.replace(/\D/gi, "").split("");
  s2 = s2.replace(/\D/gi, "").split("");
  const lettersFromBothArrs = Array.from(new Set(s1.concat(s2)));
  let counter = 0;
  lettersFromBothArrs.forEach(elm => {
    if (s1.indexOf(elm) >= 0 && s2.indexOf(elm) >= 0) {
      counter += 2;
    }
  });
  if (counter > 10) {
    return 10;
  } else if (counter <= 10) {
    return counter;
  }
};

const containOtherChars = (s1, s2) => {
  let count = 0;
  s1 = s1
    .replace(/\w/gi, "")
    .split("")
    .sort();
  s2 = s2
    .replace(/\w/gi, "")
    .split("")
    .sort();
  s1.forEach(elm => {
    if (s2.indexOf(elm) >= 0) {
      count += 4;
      s2.splice(s2.indexOf(elm), 1);
    }
  });
  if (count >= 20) {
    return 20;
  }
  return count;
};

const checkIfSame = (s1, s2) => {
  return s1 === s2;
};

function similarityEvaluation(s1, s2) {
  let counter = 0;
  if (checkIfSame(s1, s2)) {
    return 100;
  }
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }
  const criteria = [
    checkLength,
    checkFirstAndLastLetter,
    checkSameNumOfLetters,
    checkSameNumOfNums,
    checkNumOfWords,
    checkAscii,
    checkAsciiSum,
    checkReverseCase,
    checkPalindrome,
    identicalChar,
    checkDifferenceOfCHars,
    containSameLetters,
    containSameNumbers,
    containOtherChars
  ];
  criteria.forEach(elm => {
    let res = elm(s1, s2);
    console.log(elm, res);
    counter += res;
  });
  console.log(counter);
}
console.log(similarityEvaluation("111AAA     AAA111", "111AAA      AAA111"));
