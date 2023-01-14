"strict mode";

/*
1. create object with longest str array

*/
function lengthOfLongestSubstring(str) {
  let len = str.length;
  let arr = [];
  let longestLength = 0;

  for (i = 0; i < len; i++) {
    const char = str[i];
    if (arr.indexOf(`${char}` !== -1)) {
      // exists - check to see if it is the longest
      if (arr.length > longestLength) {
        longestLength = arr.length;
        // reset arr to start again
        arr = [];
      }
    }
    // add char to arr
    arr.push(char);
  }

  // one last check
  if (arr.length > longestLength) longestLength = arr.length;
  return longestLength;
}

let str = "pwwkew";
console.log(lengthOfLongestSubstring(str));
