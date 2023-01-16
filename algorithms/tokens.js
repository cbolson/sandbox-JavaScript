/*
create letter only tokens from a string
Note - this really should be achived using regex
*/

const specialChars = new Set(["!", ",", "?", ".", "_", "'", "@"]);
const str = "He is a very very good boy, isn't he?";

function printTokensMap(str) {
  let newStr = "";
  const a = [...str].map((c) => {
    if (specialChars.has(c)) c = " ";
    newStr = newStr + c;
    return newStr;
  });
  // create arrayy of tokens
  const tokens = newStr.split(" ").filter((v) => v != "");
  //const tokens = newStr.trim().split(/\s+/);
  return tokens;
}

console.time("map");
console.log(printTokensMap(str));
console.timeEnd("map");
// IMPORTANT - this method is faster than the REGEXP method below!!

// Note - if I add a console.log in the function the time is less ????




// REGEX CHEATSHEET : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// version using regex
function printTokens2(str) {
  // remove special chars
  const cleanString = str.replace(/[!,?._'@]/g, " ");

  const tokens = cleanString.trim().split(/\s+/);
  /*
  NOTE - REGEX:
  The \s special character matches any whitespace (spaces, tabs or newlines).
  The plus + matches the preceding item (the space) one or more times. In other words, the plus matches one or more spaces, treating them as a single match.
  */
  // create array of tokens, filtereing out any double spaces
  //const tokens = cleanString.split(" ").filter((v) => v != "");
  return tokens;
}
// console.time("regexp");
// console.log(printTokens2(str));
// console.timeEnd("regexp");