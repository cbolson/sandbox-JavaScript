const mp3 =
  "https://files.gospeljingle.com/uploads/music/2023/02/Blake_Shelton_-_Gods_Country.mp3";
const countdown = document.querySelector(".countdown");

let counter = 3;
let audio = new Audio(mp3);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // start then immediatly pause the audio
  playAudioAuto();
  counter = 4;
  const update = setInterval(function () {
    counter = counter - 1;
    countdown.innerText = counter;

    if (counter < 1) {
      clearInterval(update);
      countdown.innerText = "play";
      audio.play();
    }
  }, 1000);
});

// play then pause audio
function playAudioAuto() {
  audio.play();
  audio.pause();
}

// this is just for me to be able stop the annoying music
function pauseAudio() {
  audio.pause();
}
