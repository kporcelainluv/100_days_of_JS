const returnWhoLikes = names => {
  const lastName = names[names.length - 1];
  let str = names.slice(0, names.length - 1).join(", ");
  str += ` and ${lastName}`;
  return str;
};
const fourOfMoreUsersLike = names => {
  const length = names.length - 2;
  const returningNames = names.slice(0, 2).join(", ");
  return `${returningNames} and ${length} others`;
};

const namesToString = names => {
  const lessThanTwoUsers = "likes this";
  const moreThanTwoUsers = "like this";
  switch (names.length) {
    case 0:
      return `no one ${lessThanTwoUsers}`;
    case 1:
      return `${names[0]} ${lessThanTwoUsers}`;
  }
  if (names.length >= 2 && names.length <= 3) {
    return `${returnWhoLikes(names)} ${moreThanTwoUsers}`;
  } else {
    return `${fourOfMoreUsersLike(names)} ${moreThanTwoUsers}`;
  }
};

function likes(names) {
  return namesToString(names);
}
console.log(likes(["Max", "John", "Mark", "Jan"]));
