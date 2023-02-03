const millisecondsEl = document.querySelector("#milliseconds");
const secondsEl = document.querySelector("#seconds");
const minutesEl = document.querySelector("#minutes");
const hoursEl = document.querySelector("#hours");
const laps = document.querySelector("[data-laps]");
const buttons = document.querySelectorAll("button");

let counter;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;

buttons.forEach((btn) => {
  const action = btn.getAttribute("data-action");
  btn.addEventListener("click", () => {
    switch (action) {
      case "start":
        startTimer();
        break;
      case "pause":
        pauseTimer();
        break;
      case "reset":
        resetTimer();
        break;
      case "lap":
        lapTimer();
        break;
    }
  });
});

function count() {
  ms++;
  if (ms === 100) {
    s++;
    ms = 0;
  }
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    h++;
    m = 0;
  }

  millisecondsEl.innerText = formatNum(ms);
  secondsEl.innerText = formatNum(s);
  minutesEl.innerText = formatNum(m);
  hoursEl.innerText = formatNum(h);
}

function formatNum(num) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
function startTimer() {
  counter = setInterval(count, 10);
}
function pauseTimer() {
  clearInterval(counter);
}
function resetTimer() {
  clearInterval(counter);
  counter = 0;
  millisecondsEl.innerText = "00";
  secondsEl.innerText = "00";
  minutesEl.innerText = "00";
  hoursEl.innerText = "00";
  laps.innerHTML = "";
}
let lapCounter = 0;
function lapTimer() {
  const currentTime = `${formatNum(h)}:${formatNum(m)}:${formatNum(
    s
  )}:${formatNum(ms)}`;
  const newLap = document.createElement("li");
  newLap.innerHTML = `<li><span>Lap ${lapCounter}</span><span>${currentTime}</span></li>`;
  laps.append(newLap);
  ++lapCounter;
}
