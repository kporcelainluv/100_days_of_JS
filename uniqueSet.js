function uniteUnique(arr) {
  arr = [].concat([...arguments]);
  let res = [];
  arr.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (!res.includes(element[i])) {
        console.log(element[i]);
        res.push(element[i]);
      }
    }
  });
  console.log(res);
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
