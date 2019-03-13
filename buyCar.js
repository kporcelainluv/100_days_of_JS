function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let month = 1;
  if (startPriceOld >= startPriceNew) {
    return [0, startPriceOld - startPriceNew];
  }
  let carPrice = startPriceOld.valueOf();
  while (startPriceNew >= startPriceOld) {
    if (month % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    carPrice -= (carPrice / 100) * percentLossByMonth;
    startPriceOld = carPrice + savingperMonth * month;
    startPriceNew -= (startPriceNew / 100) * percentLossByMonth;
    month += 1;
  }
  return [month - 1, Math.round(startPriceOld - startPriceNew)];
}
console.log(nbMonths(2000, 8000, 1000, 1.5));
console.log(nbMonths(12000, 8000, 1000, 1.5));
