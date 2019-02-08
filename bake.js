function cakes(recipe, available) {
  let flag = 0;
  let recipeNeeds = Object.keys(recipe);
  let res = recipeNeeds.map(elm => {
    if (!available.hasOwnProperty(elm)) {
      return 0;
    } else {
      return Math.floor(available[elm] / recipe[elm]);
    }
  });
  console.log(res);
  if (res.indexOf(0) >= 0) {
    return flag;
  } else {
    flag = Math.min(...res);
    return flag;
  }
}
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
