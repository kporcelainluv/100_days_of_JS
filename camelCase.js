function solution(string) {
  let str = string.split(/(?=[A-Z])/);
  console.log(str);
}
solution("camelCasing");
