/*
wite a function that takes 2 strings, A & B
and returns whether B is in A (case insensitive)
*/
function incExact(str1, str2) {
  // if we want exact match including case
  return str1.split(" ").includes(str2);
}
function incIgnoreCase(str1, str2) {
  // exists anywhere in string ignoring case
  return str1.toLowerCase().includes(str2.toLowerCase());
}
function incIgnoreCaseExact(str1, str2) {
  // if we need exact word match we need to split string into array
  return str1.toLowerCase().split(" ").includes(str2.toLowerCase());
}
const str1 = "I like cats";
const str2 = "Cat";

console.log(incExact(str1, str2)); // expect "false"
console.log(incIgnoreCase(str1, str2)); // expect "true"
console.log(incIgnoreCaseExact(str1, str2)); // expect "false"
