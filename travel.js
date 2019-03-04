function travel(r, zipcode) {
  r = r
    .split(",")
    .map(elm => elm.split(" "))
    .filter(elm => `${elm[elm.length - 2]} ${elm[elm.length - 1]}` === zipcode);

  let res = r.reduce((acc, elm, index, arr) => {
    acc += elm.slice(1, elm.length - 2).join(" ");
    if (index < arr.length - 1) {
      acc += ", ";
    }
    return acc;
  }, `${zipcode}:`);

  res += "/";

  r.forEach((element, index) => {
    res += element[0];
    if (index < r.length - 1) {
      res += ",";
    }
  });
  console.log(res);
}
r =
  "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432";
zipcode = "OH 43071";
travel(r, zipcode);
