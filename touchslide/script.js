const slider = document.querySelector(".slider-container");
const slides = [...slider.querySelectorAll(".slide")];
const slideNav = document.querySelectorAll("[slide-nav]");
//console.log(slideNav);

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;
const totSlides = slides.length;

slides.forEach((slide, index) => {
  // prevent img drag
  slide.addEventListener("dragstart", (e) => e.preventDefault());

  // touch events
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchsend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // mouse events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});
// slider nav button
slideNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    navSlide(btn.getAttribute("slide-nav"));
  });
});

function navSlide(direction) {
  if (direction == "prev") {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) currentIndex = totSlides - 1;
  } else {
    currentIndex = currentIndex + 1;
    if (currentIndex == totSlides) currentIndex = 0;
  }
  setPositionByIndex();
}
// disable context menu
window.oncontextmenu = function (e) {
  // e.preventDefault();
  // e.stopPropagation();
  // return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);

    slider.classList.add("grabbing");
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
  setPositionByIndex();

  slider.classList.remove("grabbing");
}

function touchMove(event) {
  //console.log("move");
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();

  if (isDragging) {
    requestAnimationFrame(animation);
  }
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
