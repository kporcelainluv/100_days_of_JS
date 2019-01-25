// task link = https://www.coderbyte.com/editor/guest:First%20Factorial:JavaScript

function FirstFactorial(num) {
  let i = num;
  if (i == 0) {
    return 1;
  } else {
    return FirstFactorial(i - 1) * num;
  }
}

console.log(FirstFactorial(4));
