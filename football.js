function bestMatch(aGoals, bGoals) {
  let res = aGoals.reduce(
    ([diff, bestBScore, index], aScore, i) => {
      const bScore = bGoals[i];
      const currDiff = aScore - bScore;
      if (currDiff < diff) {
        return [currDiff, bScore, i];
      }
      if (currDiff === diff && bScore > bestBScore) {
        return [currDiff, bScore, i];
      }
      return [diff, bestBScore, index];
    },
    [aGoals[0] - bGoals[0], bGoals[0], 0]
  );
  return res[2];
}

console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]));
