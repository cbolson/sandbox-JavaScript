var isPalindrome = function (x) {
  // convert to array, then reverse, then join again
  const strReverse = Array.from(String(x), Number).reverse().join("");

  // compare original with reversed string
  if (x == strReverse) return true;
  else return false;
};

console.log(isPalindrome(123));
