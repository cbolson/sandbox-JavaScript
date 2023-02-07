/*
wite a function that takes 2 strings, A & B
and returns whether B is in A (case insensitive)
*/
function stringIncludes(str1, str2) {
  // let strTemp = str1.toLowerCase();

  return str1.toLowerCase().includes(str2.toLowerCase());

  // const arr1 = str1.toLowerCase().split(" ");
  // if (arr1.includes(str2.toLowerCase())) return true;
  // return false;
}

console.log(stringIncludes("I am happy", "Am"));
console.log(stringIncludes("I like cats", "dog"));
