console.log("sum all numbers"); // this action is really to initate the JS so that we get accurate timers as the first funciton always seems to take longer

// loop
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}
//console.time("sum1");
console.log(sumTo(100)); // 5050
//console.timeEnd("sum1");

// recursive
function sumTo2(n) {
  if (n == 1) return 1; // nothing more to add - return result
  return n + sumTo2(n - 1); // call to self with one number less
}
//console.time("sum2");
console.log(sumTo2(100)); // 5050
//console.timeEnd("sum2");

// formula - best method as it is a simple sum
function sumTo3(n) {
  // 100 * (101 + 1) / 2
  return (n * (n + 1)) / 2;
}
//console.time("sum3");
console.log(sumTo3(100)); // 5050
//console.timeEnd("sum3");

// using reduce
function sumToReduce(n) {
  // create array of numbers upto n
  const arr = [...Array(n + 1).keys()].slice(1);
  // use reduce to get sum of all arr values
  return arr.reduce((acc, b) => acc + b);
}
//console.time("sum4");
console.log(sumToReduce(100)); // 5050
//console.timeEnd("sum4");
