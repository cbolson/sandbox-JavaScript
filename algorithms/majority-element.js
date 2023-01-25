/*
Leet 169
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
var majorityElement = function (nums) {
  // create new object from array using values as keys and values being a counter of occurrences
  var obj = {};
  nums.forEach((n) => {
    obj[n] ? obj[n]++ : (obj[n] = 1);
  });

  // reduce object to get key of highest value
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
};

console.table(majorityElement([2, 2, 1, 1, 1, 2, 2, 3]));
