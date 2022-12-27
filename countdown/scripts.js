"use strict";
const dateField = document.querySelector("#countdown-date");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const timerDaysEl = document.querySelector("#timer-days");
const timerHoursEl = document.querySelector("#timer-hours");
const timerMinutesEl = document.querySelector("#timer-minutes");
const timerSecondsEl = document.querySelector("#timer-seconds");

let countDownTo;
let timerInterval;

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countDownTo).getTime();
  const difference = (countdown - now) / 1000;

  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  daysEl.innerHTML = formatTime(days, "day");
  hoursEl.innerHTML = formatTime(hours, "hour");
  minutesEl.innerHTML = formatTime(minutes, "minute");
  secondsEl.innerHTML = formatTime(seconds, "second");

  timerDaysEl.style.setProperty("--percent", convertToPercent(days, 365));
  timerHoursEl.style.setProperty("--percent", convertToPercent(hours, 24));
  timerMinutesEl.style.setProperty("--percent", convertToPercent(minutes, 60));
  timerSecondsEl.style.setProperty("--percent", convertToPercent(seconds, 60));
};

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};

const convertToPercent = (num, divisor) => {
  return (num / divisor) * 100;
};

function setCountdown() {
  const d = dateField.value;
  localStorage.setItem("countdown-date", JSON.stringify(d));
  countDownTo = new Date(d);
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
}

window.addEventListener("load", () => {
  // set min date for date field to current date to prevent previous dates from being selected
  let today = new Date();
  today.setDate(today.getDate() + 1);
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  dd = dd.toString().padStart(2, "0");
  mm = mm.toString().padStart(2, "0");
 const tomorrow = `${yyyy}-${mm.padStart(0, 2)}-${dd}`;
  dateField.setAttribute("min", tomorrow);

  // set inital countdown date to stored date if set
  const storedDate =
    JSON.parse(localStorage.getItem("countdown-date")) || tomorrow;
  if (storedDate) {
    dateField.value = storedDate;
  }

  setCountdown();
});
dateField.addEventListener("change", (e) => {
  setCountdown();
});
