function list(names) {
  let res = [];
  names.forEach((elm, index) => {
    res.push(elm.name);
  });

  res = res.join(", ").replace(/,(?=[^,]*$)/, " &");
  console.log(res);
}
