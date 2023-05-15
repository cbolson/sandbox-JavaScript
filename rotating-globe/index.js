const globe = document.querySelector("#globe");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let moveVal = 1;

window.addEventListener("scroll", () => {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  moveVal = Math.floor((scrollTop / height) * 359);
  const numPic = moveVal.toString().padStart(3, "0");
  //console.log(moveVal);
  globe.setAttribute(
    "src",
    `./globe/frame_${numPic}_delay-0.01s.gif`
  );
});
