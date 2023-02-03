var plusOne = function (digits) {
  // convert arr to number
  let n = BigInt(digits.join("")) + BigInt(1);

  return Array.from(String(n), Number);
};

const nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(nums));
