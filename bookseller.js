function stockList(listOfArt, listOfCat) {
  let resultingString = "";
  listOfArt = listOfArt.filter(elm => listOfCat.indexOf(elm[0]) >= 0);
  if (!listOfArt.length || !listOfCat.length) {
    return "";
  }
  let listOfFirstLetters = listOfArt.map(elm => elm[0]);
  listOfCat.forEach(letter => {
    if (listOfFirstLetters.indexOf(letter) === -1) {
      listOfArt.push(`${letter} ${0}`);
    }
  });
  listOfArt = Object.entries(
    listOfArt.reduce((acc, elm) => {
      if (!acc.hasOwnProperty(elm[0])) {
        acc[elm[0]] = parseInt(elm.split(" ")[1]);
      } else {
        acc[elm[0]] += parseInt(elm.split(" ")[1]);
      }
      return acc;
    }, {})
  )
    .sort((a, b) => {
      return listOfCat.indexOf(a[0]) - listOfCat.indexOf(b[0]);
    })
    .forEach(element => {
      resultingString += `(${element[0]} : ${element[1]}) - `;
    });
  return resultingString.slice(0, resultingString.length - 3);
}
b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
c = ["A", "B", "C", "W"];
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)";
console.log(stockList(b, c));
