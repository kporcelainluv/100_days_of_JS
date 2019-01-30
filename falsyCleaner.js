function bouncer(arr) {
  let falsy = [false, null, 0, "", undefined, NaN];
  arr = arr.filter(x => !falsy.includes(x));
  console.log(arr);
}

bouncer([7, "ate", "", false, 9]);
