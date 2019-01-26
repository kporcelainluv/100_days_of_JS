//Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  const userProfiles = contacts.filter(c => c.firstName === name);
  const userProfile = userProfiles && userProfiles[0];
  if (userProfile) {
    if (userProfile[prop]) {
      return userProfile[prop];
    } else if (!(prop in userProfile)) {
      return "No such property";
    }
  }
  return "No such contact";
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "likes"));
