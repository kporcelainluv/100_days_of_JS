function TimeConvert(num) {
  hours = Math.floor(num / 60);
  mins = num - hours * 60;
  console.log(`Часов: ${hours}, минут: ${mins}`);
}

TimeConvert(123);
