const states = {
  AZ: "Arizona",
  CA: "California",
  ID: "Idaho",
  IN: "Indiana",
  MA: "Massachusetts",
  OK: "Oklahoma",
  PA: "Pennsylvania",
  VA: "Virginia"
};
function byState(str) {
  let cases = str
    .split(/\n/)
    .map(elm => elm.split(" "))
    .sort((a, b) => {
      if (a[a.length - 1][0] > b[b.length - 1][0]) {
        return 1;
      } else if (a[a.length - 1][0] < b[b.length - 1][0]) {
        return -1;
      }
      return 0;
    })
    .map(element => {
      let state = states[element[element.length - 1]];
      element.splice(element.length - 1, 1, state);
      return element;
    })
    .map(elm => {
      if (elm.join("").indexOf(",")) {
        elm = elm.join(" ").replace(/,/gi, "");
        return elm.split(" ");
      }
    });

  let res = [];
  cases.forEach(element => {
    let lastres = res[res.length - 1];
    if (res.length === 0) {
      res.push(element[element.length - 1] + "\r\n");
      res.push(".....^" + element.join(" ") + "\r\n");
    } else if (
      lastres.split(" ")[lastres.split(" ").length - 1] !=
      element[element.length - 1]
    ) {
      res.push("^" + element[element.length - 1] + "\r\n");
      res.push(".....^" + element.join(" ") + "\r\n");
    } else {
      res.push(".....^" + element.join(" ") + "\r\n");
    }
  });
  return res.join(" ");
}

var case0 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`;
var case1 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`;

byState(case0);
