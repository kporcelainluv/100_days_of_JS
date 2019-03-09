function surfsUp(waves) {
  let res = [];
  const [firstWave, secondWave, thirdWave] = waves;
  if (firstWave >= 8 && firstWave <= 10) {
    res.push(firstWave, "Johnny falls");
  } else if (secondWave >= 8 && secondWave <= 10) {
    res.push(secondWave, "Johnny falls");
  } else if (thirdWave > 10) {
    res.push("Johnny waits");
  } else if (thirdWave >= 10) {
    res.push(thirdWave, "Johnny falls");
  } else if (thirdWave < 10) {
    res.push(thirdWave, "Johnny rides");
  }
  return res;
}
