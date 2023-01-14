const arr = [0, 3, 2, 1, 5, 6, 8];

//NOTE does NOT work if duplicates or negative numbers
// var missingNum = function (nums) {
//   const gSum = (nums.length * (nums.length + 1)) / 2;
//   //console.log(gSum);

//   const nSum = nums.reduce((acc, el) => acc + el, 0);

//   console.log(gSum - nSum);
// };

//missingNum(arr);

var missingNum = function (arr) {
const red = arr.reduce((ac, a) => ({ ...ac, [a]: "T" }), {});
//console.log(red);
  for (let i = 1; i <= arr.length; i++) {
    if (!red[i]) return i;
  }
  
  // return max value +1
  return Math.max(...arr)+1;
};
let res = missingNum(arr);
console.log(res);

function missingValues(arr) {
  let missArray = [];
  let minNum = Math.min(...arr); //1
  let maxNum = Math.max(...arr); //6

  // indexOf   return its position, not there in -1
  for (let i = minNum; i < maxNum; i++) {
    if (arr.indexOf(i) < 0) {
      missArray.push(i); // erturn array of missing mumbers
    }
  }
  return missArray;
}
function missingFirstNum(arr) {
  if (arr.length == 0) return 0;
  let minNum = Math.min(...arr); //1
  let maxNum = Math.max(...arr); //6

  // indexOf   return its position, not there in -1
  for (let i = minNum; i < maxNum; i++) {
    if (arr.indexOf(i) < 0) {
      return i;
    }
  }
  return maxNum + 1; // if we have no missing numbers return max+1
}

let a = [1, 2, 3, 6];
let b = [-3, -2, 2, 7];
let c = [1, 2];
let d = [];
let e = [0, 3, 2, 1, 5, 6, 8];
console.log("\n----array of missing values-----");
console.log(missingValues(a)); // expects [4,5]
console.log(missingValues(b)); // expects [-1,0,1,3,4,5,6]
console.log(missingValues(c)); // expects [3]
console.log(missingValues(d)); // expects []
console.log(missingValues(e)); // expects [4,7]

console.log("\n----first missing value -----");
console.log(missingFirstNum(a)); // expects 4
console.log(missingFirstNum(b)); // expects -1
console.log(missingFirstNum(c)); // expects 3
console.log(missingFirstNum(d)); // expects 0
console.log(missingFirstNum(e)); // expects 4
