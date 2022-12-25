"use strict";

let countDownTo = new Date("01 January 2023 00:00");

const monthsEl = document.getElementById("months");
const weeksEl = document.getElementById("weeks");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countDownTo).getTime();
  const difference = (countdown - now) / 1000;

  let months = Math.floor(difference / (60 * 60 * 24 * 7 * 4));
  let weeks = Math.floor(difference / (60 * 60 * 24 * 7));
  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  monthsEl.innerHTML = formatTime(months, "month");
  weeksEl.innerHTML = formatTime(weeks, "week");
  daysEl.innerHTML = formatTime(days, "day");
  hoursEl.innerHTML = formatTime(hours, "hour");
  minutesEl.innerHTML = formatTime(minutes, "minute");
  secondsEl.innerHTML = formatTime(seconds, "second");

  convertToDeg(seconds, 60);
};

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};

const convertToDeg = (num,divisor) => {
  const deg = (num / divisor) * 360;
  console.log(deg);
}

let timerInterval;

window.addEventListener("load", () => {
  startCountdown();

 // timerInterval = setInterval(startCountdown, 1000);
});
