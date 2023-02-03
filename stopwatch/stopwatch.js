let timer = document.querySelector("#timer");
let milliseconds = document.querySelector("#milliseconds");
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");

const btnStart = document.querySelector("#btn-start");
const btnPause = document.querySelector("#btn-pause");
const btnClear = document.querySelector("#btn-clear");
let time = "";

let ms = 0;
let s = 0;
let m = 0;

btnStart.addEventListener("click", () => {
  startTimer();
});
btnPause.addEventListener("click", () => {
  pauseTimer();
});
btnClear.addEventListener("click", () => {
  clearTimer();
});
let counter;

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

  milliseconds.innerText = ms.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  seconds.innerText = s.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  minutes.innerText = m.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
function startTimer() {
  console.log("start timer");

  counter = setInterval(count, 10);
}
function pauseTimer() {
  clearInterval(counter);
}
function clearTimer() {
  clearInterval(counter);
  counter = 0;
  milliseconds.innerText = 0;
  seconds.innerText = 0;
  minutes.innerText = 0;
}
