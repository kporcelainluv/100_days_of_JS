function ranking(people) {
  let position = 0;
  let prevPoints = 0;
  let blackHorse = 0;
  people
    .sort((a, b) => {
      if (a.points > b.points) {
        return -1;
      } else if (a.points < b.points) {
        return 1;
      }
      if (a.points === b.points) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      }
    })
    .forEach(element => {
      if (element.points != prevPoints) {
        position += 1;
        position += blackHorse;
        blackHorse = 0;
      }
      if (element.points === prevPoints) {
        blackHorse += 1;
      }
      element["position"] = position;
      prevPoints = element.points;
    });
  return people;
}
let d = [
  { name: "Pjhan", points: 140 },
  { name: "Gijvuvgsxw", points: 90 },
  { name: "Bkifgp", points: 20 },
  { name: "Xkgilfu", points: 100 },
  { name: "Rfnvuno", points: 110 },
  { name: "Mwzijcafo", points: 50 },
  { name: "Hpwniec", points: 50 },
  { name: "Bmxjyflk", points: 120 },
  { name: "Gbcebptch", points: 130 },
  { name: "Plrmwaarl", points: 10 },
  { name: "Vwyss", points: 40 },
  { name: "Bjdtvwl", points: 130 },
  { name: "Hwunslrw", points: 150 },
  { name: "Kmhcndprvp", points: 140 },
  { name: "Hgoctd", points: 10 },
  { name: "Rsnvpcv", points: 100 },
  { name: "Aqzwma", points: 140 },
  { name: "Kfttlqnc", points: 100 },
  { name: "Yddypmr", points: 110 },
  { name: "Vzvlkcw", points: 150 },
  { name: "Rtyilk", points: 80 },
  { name: "Yvkoi", points: 50 },
  { name: "Watje", points: 60 },
  { name: "Mcwjluhqaa", points: 40 },
  { name: "Xphehqir", points: 80 },
  { name: "Rtehj", points: 70 },
  { name: "Ffeefsu", points: 130 },
  { name: "Ogmfr", points: 100 },
  { name: "Xvqcthvucv", points: 40 },
  { name: "Uivdssx", points: 90 },
  { name: "Woxekdz", points: 90 },
  { name: "Cfedupqg", points: 100 },
  { name: "Fyniwegd", points: 100 },
  { name: "Ggthnsd", points: 80 },
  { name: "Rbgnyyf", points: 130 },
  { name: "Tnfttkvydh", points: 110 },
  { name: "Lpjudpcn", points: 10 },
  { name: "Awhlqdgvn", points: 30 },
  { name: "Deulo", points: 20 },
  { name: "Fskdvtmua", points: 40 },
  { name: "Reefyc", points: 10 },
  { name: "Cqjchxksp", points: 10 },
  { name: "Nfvcvahza", points: 100 },
  { name: "Thbdmp", points: 90 },
  { name: "Lvnclsr", points: 90 },
  { name: "Zwvkomfyqs", points: 70 },
  { name: "Fzhqfccx", points: 50 },
  { name: "Aopthqmev", points: 40 }
];
console.log(ranking(d));
