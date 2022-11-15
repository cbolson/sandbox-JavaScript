let i = 0;
console.log(i);

function increaseNum() {
  // this will increase the number AFTER it has been returned
  return i++;
  // this will increase the number BEFORE it is returned
  // return ++i;
}

console.log(increaseNum());
console.log(i);
