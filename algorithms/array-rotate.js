/*
Array rotate

Take a given array and move n number of elements inplace from the end and place them at the beginning one by one
ej. 
array:[1,2,3,4,5]
num: 3 
expected: [3,4,5,1,2]
*/
function rotateArrLoop(arr, n) {
  if (arr.length < 2) return arr;
  for (i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

function rotateArrSplice(arr, n) {
  if (arr.length < 2) return arr;
  arr.unshift(...arr.splice(arr.length - n, n));
  return arr;
}

console.log("With Loop:");
console.log(rotateArrLoop([1, 2, 3, 4, 5], 3)); // expects [3,4,5,1,2]
console.log(rotateArrLoop(["apples", "bananas", "pears"], 1)); // expects ["pears","apples","bananas"]
console.log(rotateArrLoop(["red"], 1)); // expects ["red"]

console.log("With splice:");
console.log(rotateArrSplice([1, 2, 3, 4, 5], 3)); // expects [3,4,5,1,2]
console.log(rotateArrSplice(["cat", "dog", "frog", "sheep", "rabbit"], 2)); // expects ["sheep", "rabbit", "cat", "dog", "frog"]
console.log(rotateArrSplice(["red"], 1)); // expects ["red"]
