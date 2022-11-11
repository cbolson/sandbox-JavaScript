/*
Original Source: https://www.youtube.com/watch?v=DzSLUdJWrEQ&t=6999s
Date : 2022-11-09
Changes: 
- separate large function into smaller functions
- move hour hand to position between numbers to reflect minutes (dev)
- place 12 numbers around the clock face (could be a var to define which we want to show)
*/

// const elNumbers = document.querySelectorAll(".numbers li");
const elNumbers = document.querySelector(".numbers ol");
const elHour = document.querySelector(".hand-hour");
const elMin = document.querySelector(".hand-min");
const elSec = document.querySelector(".hand-sec");

// // place numbers around clock face
// function placeNumbers() {
//   /*
// next step is to add li elements dynamically
// */

//   elNumbers.forEach((number, index) => {
//     // calculate degrees
//     const degrees = (360 / 12) * index + 300; // adding 300 to avoid double negatives
//     // console.log(`${index} -${degrees}`);
//     // rotate each number
//     number.style.transform = `otate(${degrees}deg) translate(120px)  rotate(-${degrees}deg)`;
//   });
// }

// function add numbers dynamically
function addNumbers() {
  for (let i = 1; i <= 12; i++) {
    // create new number li (number is added via CSS counter)
    const elNum = document.createElement("li");
    // Create a new text node
    const text = document.createTextNode(`${i}`);
elNum.appendChild(text);

    // calculate degrees
    const degrees = (360 / 12) * i + 270; // adding 270 to avoid double negatives
    // console.log(`${index} -${degrees}`);
    // rotate each number
    elNum.style.transform = `rotate(${degrees}deg) translate(120px)  rotate(-${degrees}deg)`;
    console.log(elNum);
    elNumbers.appendChild(elNum);
  }
}

// update clock every second with current time
function updateClock() {
  // get current date and time
  const currentDate = new Date();

  // get hours, mins and seconds from current date
  const curHour = currentDate.getHours();
  const curMin = currentDate.getMinutes();
  const curSec = currentDate.getSeconds();

  const degMin = (curMin / 60) * 360; // minute position
  const degSec = (curSec / 60) * 360; // seconds position
  const degHour = (curHour * 360) / 12 + degMin / 12; // hour position to be between numbers according to minutes

  moveHand(elHour, degHour);
  moveHand(elMin, degMin);
  moveHand(elSec, degSec);
}

function moveHand(el, newDeg) {
  el.style.rotate = `${newDeg}deg`;
}

addNumbers();
//placeNumbers();
setInterval(updateClock, 1000);
