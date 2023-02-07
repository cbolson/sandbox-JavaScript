/*
array is sorted but may contain duplicates
remove duplicates
*/
var removeDuplicates = function (nums) {
  //   const len = nums.length;
  //   let lastVal = "";
  //   const newArr = [];
  //   for (let i = 0; i < len; i++) {
  //     const n = nums[i];
  //     if (n != lastVal) newArr.push(n);
  //     lastVal = n;
  //   }
  //   // add "_" to array to match length of original array
  //   while(newArr.length<len){
  //     newArr.push("_");
  //   }
  //   return newArr.length;
};

function removeDuplicatesSet(arr) {
  // using new set
  return [...new Set(arr)];
}
function removeDuplicatesReduce(arr) {
  // using reduce
  return arr.reduce((acc, b) => (acc.includes(b) ? acc : [...acc, b]), []);
}
const nums = [1, 1, 2, 4, 5, 5, 8];
console.log(removeDuplicatesSet(nums));
console.log(removeDuplicatesReduce(nums));



/*
remove duplicates but keep same length (add filler)
*/
// using push()
function removeDuplicatesSameLength(arr) {
  const newArr = [...new Set(arr)];
  //console.log(newArr);
  while (newArr.length < arr.length) {
    newArr.push("_");
  }
  return newArr;
}

// using fill()
function removeDuplicatesSameLengthFill(arr) {
  const newArr = [...new Set(arr)];

  const l1 = newArr.length; // length of new array (before we add empty values)
  newArr.length = arr.length; // make new array length to be same as passed array
  newArr.fill("_", l1); // fill array from last postion to end
  return newArr;
}
console.log(removeDuplicatesSameLength(nums));
console.log(removeDuplicatesSameLengthFill(nums));
