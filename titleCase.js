function titleCase(str) {
  str = str.toLowerCase().split(" ");
  str = str.map(function(element) {
    return element[0].toUpperCase() + element.slice(1, element.length);
  });
  return str.join(" ");
}

titleCase("I'm a little tea pot");
