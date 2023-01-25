var lengthOfLastWord = function (s) {
  const arr = s.trim().split(" ");
  return arr[arr.length-1].length;
};

const str = "Hello World, how are you today?";
console.log(lengthOfLastWord(str));
