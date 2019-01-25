function FirstReverse(str) {
  let myStr = [];
  myStrList = str.split("");
  myStrList.forEach(function(element) {
    myStr.unshift(element);
  });
  console.log(myStr.join(""));
}
FirstReverse("coderbyte");
