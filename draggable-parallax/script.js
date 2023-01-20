"use strict";

let gallery = document.querySelector("[slider]");
let galleryWrapper = document.querySelector("[gallery]");
let moveVal = 0;
let dragging = false;
let mouseLocation;
let galleryLocation;

const easeOutQuad = (t) => {
  return t * (2 - t);
};
const moveGallery = () => {
  moveVal = easeOutQuad(window.scrollY * 0.003);
  gallery.style.transform = `rotateZ(-5deg) translateX(${moveVal})`;
  //gallery.style.transform = `rotate(${moveVal}deg)`; // rotate with scroll
  requestAnimationFrame(moveGallery);
};

requestAnimationFrame(moveGallery);

const dragStart = (e) => {
  dragging = true;
  mouseLocation = e.pageX;
  galleryLocation = galleryWrapper.scrollLeft;
};
const dragStop = (e) => {
  dragging = false;
  mouseLocation = e.pageX;
  galleryLocation = galleryWrapper.scrollLeft;
};
const dragActive = (e) => {
  if (!dragging) return;
  let offset = e.pageX - mouseLocation;

  galleryWrapper.scrollLeft = galleryLocation - offset;
};

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragActive);
gallery.addEventListener("mouseup", dragStop);
