function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  collection = collection.filter(elm => {
    for (let key of keys) {
      if (!elm.hasOwnProperty(key) || elm[key] != source[key]) {
        return false;
      }
    }
    return true;
  });
  console.log(collection);
}
whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
