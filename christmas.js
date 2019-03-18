function timeForMilkAndCookies(date) {
  if (date.getDate() === 24 && date.getMonth() === 11) {
    return true;
  }
  return false;
}
var year = 2013;
var month = 11; //Date class is 0 based, so 11 = December
var day = 24;
timeForMilkAndCookies(new Date(year, month, day));
