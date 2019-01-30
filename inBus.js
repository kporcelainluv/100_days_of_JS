var number = function(busStops) {
  let inBus = 0;
  let outBus = 0;
  busStops.forEach(element => {
    inBus += element[0];
    outBus += element[1];
  });
  return inBus - outBus;
};
console.log(number([[10, 0], [3, 5], [5, 8]]));
