// get array of all the slideshows on the page
const sliders = document.querySelectorAll("[data-slider]");

sliders.forEach((slider) => {
  const sliderElement = slider.firstElementChild;
  const sliderImages = sliderElement.querySelectorAll("img");
  const sliderButtons = slider.querySelectorAll("[slider-btn]");
  let currentImg = 0;

  sliderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const direction = btn.getAttribute("slider-btn");
      slideImg(direction);
    });
  });
  // slide image container
  function slideImg(direction) {
    if (direction == "prev") currentImg--;
    else currentImg++;

    if (currentImg == sliderImages.length) {
      currentImg = 0;
    } else if (currentImg < 0) {
      currentImg = sliderImages.length - 1;
    }
    // get slider width to calculate transform position (check each time incase the viewport width has changed)
    const imgW = sliderElement.offsetWidth;
    sliderElement.style.transform = `translateX(-${currentImg * imgW}px)`;
  }
});
