const checkLength = (s1, s2) => {
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
  s1 = s1.replace(/[A-Za-z]/gi, "");
  s2 = s2.replace(/[A-Za-z]/gi, "");
  if (s1.length === s2.length) {
    return 5;
  }
  return 0;
};

const checkNumOfWords = (s1, s2) => {
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  const flag = true;
  s1.forEach(element => {
    if (s1.indexOf(element) === -1) {
      flag = false;
    }
  });
  return flag;
};
const checkAscending = arr => {
  return arr
    .slice(1)
    .map((e, i) => e > arr[i])
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
  s1 = checkAscending(s1);
  s2 = checkAscending(s2);
  if (s1 && s2) {
    return 10;
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
  let palindrome1 = s1.split("").filter((elm, index, arr) => {
    if (elm === arr[arr.length - index - 1]) {
      return true;
    }
    return false;
  });
  let palindrome2 = s2.split("").filter((elm, index, arr) => {
    if (elm === arr[arr.length - index - 1]) {
      return true;
    }
    return false;
  });
  if (palindrome1.length > 1 && palindrome2.length > 1) {
    return 10;
  }
  return 0;
};

const identicalChar = (s1, s2) => {
  s1 = Array.from(new Set(s1.split("")));
  s2 = Array.from(new Set(s2.split("")));
  if (s1.length === 1 && s2.length === 1) {
    if (s1[0] === s2[0]) {
      return 40;
    }
  }
  return 0;
};

const checkDifferenceOfCHars = (s1, s2) => {
  s1 = Array.from(new Set(s1.split("").sort()));
  s2 = Array.from(new Set(s2.split("").sort()));
  const res = s1.filter(elm => s2.indexOf(elm) == -1);
  if (res.length === 1) {
    return 30;
  }
  return 0;
};
checkReverseCase("abc", "cba");
function similarityEvaluation(s1, s2) {
  //coding here...
}
similarityEvaluation("^ptbA9oD*tlFWilGWLu", "rqrx&RSsKUciXXz?p}p");
