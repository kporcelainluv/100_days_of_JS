let upperCase = function(element) {
  return element[0].toUpperCase() + element.slice(1, element.length);
};

function titleCase(title, minorWords) {
  if (!title) {
    return title;
  }
  let res = "";
  title = title.toLowerCase().split(" ");
  if (minorWords) {
    let res = title.map((element, index) => {
      if (
        minorWords
          .toLowerCase()
          .split(" ")
          .indexOf(element) === -1 ||
        index === 0
      ) {
        return upperCase(element);
      } else {
        return element;
      }
    });
    return res.join(" ");
  } else {
    let res = title.map(element => {
      return upperCase(element);
    });
    return res.join(" ");
  }
}
// console.log(titleCase("a clash of KINGS", "a an the of")); // should return: 'A Clash of Kings'
// console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // should return: 'The Wind in the Willows'
// console.log(titleCase("the quick brown fox")); // should return: 'The Quick Brown Fox'
console.log(titleCase("", ""));
