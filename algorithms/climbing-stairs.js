/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
var climbStairs = function (n) {
  //   return counters[n];
  if (n < 4) return n;
  let a = 1;
  let b = 1;
  let totWays = 0;
  for (let i = 2; i <= n; i++) {
    totWays = a + b;
    a = b;
    b = totWays;
  }
  return totWays;
};

console.log(climbStairs(5));
