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
  myArr = [];
  contacts.filter(element => {
    if (element.firstName === name) {
      myArr.push(element);
    }
  });
  if (myArr.length < 1) {
    console.log("No such contact");
  }

  if (myArr[0][prop]) {
    return myArr[0][prop];
  } else {
    return "No such property";
  }
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "likes"));
