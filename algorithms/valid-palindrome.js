var isPalindrome = function (s) {
  // remove anything that is not a letter or number then convert to lowercase
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // The ^ character specifies to match what's not in the brackets
  // \w equals to [a-zA-Z0-9_]
  // \W equals to [^a-zA-Z0-9_

  // reverse string 1. split into array, 2. reverse array, 3. join together again
  const strReverse = cleanStr.split("").reverse().join("");

  // return true of false if same
  return strReverse === cleanStr;
};
console.log(isPalindrome("race a car"));  // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("red rum, sir, is murder")); // true
