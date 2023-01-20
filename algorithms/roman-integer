"strict mode";

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

check each letter
I = 1
IV = 4
V = 5
IX = 9
X = 10
XL = 40
etc
*/

var romanToInt = function (str) {
  const len = str.length;
  if (len == 0) return 0;

  let prevChar;
  let total = 0;
  let newNum = 0;
  let nextChar;
  for (let i = 0; i < len; i++) {
    // define char (convert to uppercase just in case)
    char = str[i].toUpperCase();

    prevChar = i > 0 ? str[i - 1] : "";
    nextChar = i < len - 1 ? str[i + 1] : "";
    newNum = 0;
    switch (char) {
      case "I":
        if (nextChar === "V") newNum = 4;
        else if (nextChar === "X") newNum = 9;
        else newNum = 1;
        break;
      case "V":
        if (prevChar != "I") newNum = 5;
        break;

      case "X": // 10
        if (nextChar === "L") newNum = 40;
        else if (nextChar === "C") newNum = 90;
        else if (prevChar != "I") newNum = 10;
        break;

      case "L": // 50
        if (prevChar != "X") newNum = 50;

        break;
      case "C": // 100
        if (nextChar === "D") newNum = 400;
        else if (nextChar === "M") newNum = 900;
        else if (prevChar != "X") newNum = 100;
        break;

      case "D": // 50
        if (prevChar != "C") newNum = 500;
        break;
      case "M": // 50
        if (prevChar != "C") newNum = 1000;
        break;
    }
    total = total + newNum;
  }
  return total;
};

//const s = "III"; // expect 3
//const s = "XIV"; // expect 14
// const s = "XX1"; // expect 21
// const s = "XV";// expect 15
// const s = "XXV";// expect 25
//const s = "XL"; // expect 45
// const s = "LX1"; // expect 61
// const s = "LXXIV"; // expect 74
//const s = "LXXXV"; // expect 85
// const s = "XC"; // expect 90
//const s = "XCIX"; // expect 99
//const s = "CXXV"; // expect 125
//const s = "CXL"; // expect 140
//const s = "	CXXV"; // expect 125
//const s = "	CLIX"; // expect 159
//const s = "CCCXXVII"; // expect 327
//const s = "CDLXXIV"; // expects 474
const s = "DCXXI"; // expects 621
const res = romanToInt(s);
console.log(res);
