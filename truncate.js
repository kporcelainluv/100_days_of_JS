function truncateString(str, num) {
  if (str.length === num || str.length < num) {
    return str;
  } else {
    str = str.slice(0, num);
    return str + "...";
  }
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
