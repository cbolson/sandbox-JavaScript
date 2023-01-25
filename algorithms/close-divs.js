/*
From mock techinical interview
https://www.youtube.com/watch?v=t3qZR6Qjy-c&t=3967s
*/
// non related arr pop tests  
// const arr = ["three", "two", "one", "banana", "apple", [1, 2]];
// console.log(arr);
// let t = arr.pop(2);
// console.log(t);
// console.log(typeof t);
// console.log(arr);

function stringIncludes() {}
function closeDivs(str) {
  length = str.length;
  let newStr = "";
  let divCounter = 0;
  for (let i = 0; i < length; i++) {
    let char = str[i];
    if (char === "<") {
      // this could be a div
      let strCheck = "<";
      for (let j = 1; j < 5; j++) {
        const nextChar = str[i + j];
        strCheck += nextChar;
      }
      if (strCheck === "<div>") {
        divCounter++;

        // if this is a second div we need to close it
        if (divCounter > 1 && divCounter % 2 === 0) {
          char = char + "/";
        }
      }
    }
    newStr += char;
  }

  return newStr;
}

//console.log(closeDivs("<div> this <p>is</p> a test<div>"));
console.log(closeDivs("<div><div>this <p>is</p> a test<div><p>"));
