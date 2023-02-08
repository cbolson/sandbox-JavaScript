/*
write a function that takes any number of arguments of type number
and returns the sum of all the numbers
*/
function sumLoop(...arr) {
  // using loop
  let num = 0;
  arr.forEach((n) => {
    num += n;
  });
  return num;
}
function sumReduce(...arr) {
  //using reduce
  // const num = arr.reduce((acc, b) => {
  //   return acc + b;
  // }, 0);
  // return num;

  // reduce - single line
  return arr.reduce((acc, b) => acc + b);
}
console.log("sum", sumLoop(2, 3, 4, 5));
console.log("sum", sumReduce(2, 3, 4, 5));
