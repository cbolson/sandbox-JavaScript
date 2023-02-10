var isValid = function (s) {
  if(s.length<2) return false;
  const stack = [];
  for (char of s) {
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (char !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid("([]{)}")); // false
console.log(isValid("([]{})")); // true
