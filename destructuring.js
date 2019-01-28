const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
// two ways of destructuiring
function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // const { tomorrow: tempOfTomorrow } = avgTemperatures;
  const { today, tomorrow } = avgTemperatures;
  return tomorrow;
  // return tempOfTomorrow
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
