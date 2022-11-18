const slider = document.querySelector("#slider");
const sliderEl = slider.querySelector("#slider-images");
const sliderImages = sliderEl.querySelectorAll("img");
const btPrev = slider.querySelector("#btn-prev");
const btNext = slider.querySelector("#btn-next");

let currentImg = 0;

btPrev.addEventListener("click", () => {
  currentImg--;
  updateImg();
});
btNext.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

function updateImg() {
  if (currentImg == sliderImages.length) {
    currentImg = 0;
  } else if (currentImg < 0) {
    currentImg = sliderImages.length - 1;
  }
  sliderEl.style.transform = `translateX(-${currentImg * 600}px)`;
}
