function translatePigLatin(str) {
  if (/[aeyiuo]/.test(str[0])) {
    return str + "way";
  } else if (!/[aeyiuo]/.test(str)) {
    return str + "ay";
  } else {
    let firstChar = str.split(/[aeyiuo]/)[0];
    str = str.slice(0 + firstChar.length, str.length);
    return str + firstChar + "ay";
  }
}

console.log(translatePigLatin("glv"));
