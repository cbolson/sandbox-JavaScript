const globe = document.querySelector("#globe");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let moveVal = 1;
let lastNum = 0;

window.addEventListener("scroll", () => {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  moveVal = Math.floor((scrollTop / height) * 359);

  // patch as I don't have an image for 0
  if (moveVal == 0) moveVal = 1;

  // changing every single  number was too much for the browser if you scroll quickly
  // just show every 10
  moveVal = Math.ceil(moveVal / 5) * 5;

  const numPic = moveVal.toString().padStart(3, "0");
  // only change image if move val is not the same as lastNum
  if (moveVal !== lastNum) {
    console.log(moveVal);
    globe.setAttribute("src", `./globes/frame_${numPic}_delay-0.01s.webp`);
  }
  lastNum = moveVal;
});
