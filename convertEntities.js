function convertHTML(str) {
  let chart = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  str = str.split("");
  let res = str.map(elem => chart[elem] || elem).join("");
  return res;
}
