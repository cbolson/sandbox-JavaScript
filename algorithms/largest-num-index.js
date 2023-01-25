/*
Write a function thattakes an array of numbers 
and returns the index of the largest number
 */

function getLargestIndex(arr) {
return arr.indexOf(Math.max(...arr));
}

console.log(getLargestIndex([2, 6, 7, 3, 9, 14, 5]));
