/*
write a function that takes any number of arguments of type number
and returns the sum of all the numbers
*/
function sum(...arr) {
  // using loop
//   let num = 0;
//   arr.forEach((n) => {
//     num += n;
//   });
//   return num;

  //using reduce
  // const num = arr.reduce((acc, b) => {
  //   return acc + b;
  // }, 0);
  // return num;

  // reduce - single line
  return arr.reduce((acc, b) => acc + b);
}
console.log("sum", sum(2, 3, 4, 5));
