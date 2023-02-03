/*
array is sorted but may contain duplicates
remove duplicates (in-place) but returned array must be the same length as original array
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

  const set = new Set(nums);
  //console.log(set);
  let i = 0;
  set.forEach((num) => {
    nums[i] = num;
    i++;
  });

  return set.size;
};

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
