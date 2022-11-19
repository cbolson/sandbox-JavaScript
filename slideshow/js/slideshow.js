// get array of all the slideshows on the page
// Note - I use the data attribute rather than the css so that if we change the css names nothing breaks
const sliders = Array.from(document.querySelectorAll("[data-slider]"));

sliders.forEach((slider) => {
  // define each slider vars and functiosn
  const sliderElement = slider.querySelector("#slider-images");
  const sliderImages = sliderElement.querySelectorAll("img");
  const sliderButtons = slider.querySelectorAll("[slider-btn]");
  let currentImg = 0;

  // add click event to buttons to slide image container
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
    // get slider width to be able to calculate transform position
    // note I am doing this within this function incase the window has been resized after defining the variables
    const imgW = slider.offsetWidth;

    sliderElement.style.transform = `translateX(-${currentImg * imgW}px)`;
  }
});
