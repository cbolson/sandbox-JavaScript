/*
Source: https://www.youtube.com/watch?v=DzSLUdJWrEQ&t=6999s
Date : 2022-11-09
Changes: 
- separate large function into smaller functions
- move hour hand to position between numbers to reflect minutes (dev)
*/

const elHour = document.querySelector(".hand-hour");
const elMin = document.querySelector(".hand-min");
const elSec = document.querySelector(".hand-sec");

function updateClock() {
  const currentDate = new Date();

  const curHour = currentDate.getHours();
  const curMin = currentDate.getMinutes();
  const curSec = currentDate.getSeconds();

  const degHour = (curHour / 12) * 360; // this needs to calculate the real position between the hour - TO DO
  const degMin = (curMin / 60) * 360;
  const degSec = (curSec / 60) * 360;

  moveHand(elHour, degHour);
  moveHand(elMin, degMin);
  moveHand(elSec, degSec);
}

function moveHand(el, newDeg) {
  el.style.rotate = `${newDeg}deg`;
}
setInterval(updateClock, 1000);
