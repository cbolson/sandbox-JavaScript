var longestCommonPrefix = function (strs) {
  // brute force first
  const strLen = strs.length;
  const arr = [];

  // order by shortest first
  strs.sort(function (a, b) {
    return b.length + a.length;
  });
  //console.log(strs);

  // get length of shortest value
  //   const len = strs[0].length;

  //   for (let i = 0; i < len; i++) {
  //     // git current letter of first item in array
  //     let char = strs[0][i];

  //     for (let j = 1; j < strLen; j++) {
  //       if (strs[j][i] != char) return arr.join("");
  //     }

  //     arr.push(char);
  //   }
  // return arr.join("");

  // define as var shortest string (first one)
  let shortestStr = strs[0];

  // loop to check every string until we have found a non-match - remove last char on each loop
  while (!strs.every((string) => string.startsWith(shortestStr))) {
    if (shortestStr.length < 1) return;
    // remove last letter of shortest string
    shortestStr = shortestStr.slice(0, -1);
  }
  return shortestStr;
};

//const arr = ["dog", "racecar", "car"];
const arr = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(arr));
