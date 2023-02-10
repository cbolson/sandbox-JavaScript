/*
Given two binary strings a and b, return their sum as a binary string.
*/

// this method is fine until we get to very large numbers
function addBinary(a, b) {
  a = parseInt(a, 2);
  b = parseInt(b, 2);
  let sum = a + b;
  console.log(sum);
  return sum.toString(2);
}
//console.log(addBinary(1, 11));
// using BigInt
function addBinary2(a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
}
console.log(addBinary2(1010, 1011));
