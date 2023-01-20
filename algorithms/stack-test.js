/*
using settime
*/

console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
setTimeout(function () {
  console.log(3);
},);

// ALL these will be logged before those sent to the stack via setTimeout
for(let i=4; i<1000;i++){
console.log(i);
}