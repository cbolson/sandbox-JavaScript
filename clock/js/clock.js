/*
Source: https://www.youtube.com/watch?v=DzSLUdJWrEQ&t=6999s
Date : 2022-11-09
Changes: 
- separate large function into smaller functions
- move hour hand to position between numbers to reflect minutes (dev)
*/
// place numbers around clock face
const elNumbers = document.querySelectorAll(".numbers li");

elNumbers.forEach((number, index) => {
  // calculate degrees
  const degrees = (360 / 12) * index;
  console.log(degrees);

  number.style.transform = `rotate(${degrees}deg) translate(100px)`;
  //transform:rotate(46deg) translate(251px) rotate(-46deg);
});

const elHour = document.querySelector(".hand-hour");
const elMin = document.querySelector(".hand-min");
const elSec = document.querySelector(".hand-sec");

function updateClock() {
  // get current date and time
  const currentDate = new Date();

  // get hours, mins and seconds from current date
  const curHour = currentDate.getHours();
  const curMin = currentDate.getMinutes();
  const curSec = currentDate.getSeconds();

  const degMin = (curMin / 60) * 360; // minute position
  const degSec = (curSec / 60) * 360; // seconds position
  const degHour = (curHour * 360) / 12 + degMin / 12; // hour position to be betwween numbers according to minutes

  moveHand(elHour, degHour);
  moveHand(elMin, degMin);
  moveHand(elSec, degSec);
}

function moveHand(el, newDeg) {
  el.style.rotate = `${newDeg}deg`;
}
setInterval(updateClock, 1000);
