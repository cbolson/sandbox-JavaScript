/*
Original Source: https://www.youtube.com/watch?v=DzSLUdJWrEQ&t=6999s
Date : 2022-11-09
Changes: 
- separate large function into smaller functions
- move hour hand to position between numbers to reflect actual minutes
- place numbers around the clock face:
  : data-show="all" = show all numbers
  : data-show="simple" - show only 3,6,9,12
*/

// const elNumbers = document.querySelectorAll(".numbers li");
const elNumbers = document.querySelector(".numbers ul");
const elHour = document.querySelector(".hand-hour");
const elMin = document.querySelector(".hand-min");
const elSec = document.querySelector(".hand-sec");

// function add numbers dynamically
function addNumbers() {
  // get "show" attribute to know if we want "all" the numbers or just the "main" numbers
  const numToShow = elNumbers.dataset.show;

  // define array of main numbers to show
  const mainNumbers = [3, 6, 9, 12];

  for (let i = 1; i <= 12; i++) {
    // create new number li (number is added via CSS counter)
    const elNum = document.createElement("li");

    // default show number
    let showNum = true;

    // if we only want the "main" numbers
    if (numToShow === "simple" && !mainNumbers.includes(i)) {
      showNum = false;
    }

    // add number to clock if showNum=true
    if (showNum) {
      // Create a new text node
      const text = document.createTextNode(`${i}`);

      // add text to new element
      elNum.appendChild(text);

      // calculate degrees
      const degrees = calcDegrees(i);

      // rotate each number relative to it's value
      elNum.style.transform = `rotate(${degrees}deg) translate(120px)  rotate(-${degrees}deg)`;

      // add new element to parent
      elNumbers.appendChild(elNum);
    }
  } // end - for numbers
}

// calculate degrees (single line arrow function just to try it out)
const calcDegrees = (i, offset = 270) => (360 / 12) * i + offset; // adding offset to avoid double negatives

// update clock every second with current time
function updateClock() {
  // get current date and time
  const currentDate = new Date();

  // get hours, mins and seconds from current date
  const curHour = currentDate.getHours();
  const curMin = currentDate.getMinutes();
  const curSec = currentDate.getSeconds();

  // calculate degrees for position of each clock hand
  const degMin = (curMin / 60) * 360;
  const degSec = (curSec / 60) * 360;
  const degHour = (curHour * 360) / 12 + degMin / 12; // hour position to be between numbers according to minutes

  // position each clock hand
  moveHand(elHour, degHour);
  moveHand(elMin, degMin);
  moveHand(elSec, degSec);
}

// move clock hand to defined position
const moveHand = (el, newDeg) => (el.style.rotate = `${newDeg}deg`);

// add numbers
addNumbers();

// set time (call every 1 second)
setInterval(updateClock, 1000);
