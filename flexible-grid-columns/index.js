const boxes = document.querySelectorAll(".box");

boxes.forEach((thisBox) => {
  const otherBox = boxes[thisBox.getAttribute("data-rel") - 1];
  const btn = thisBox.querySelector("button");

  btn.addEventListener("click", () => {
    //remove expand and hidden classes on all boxes
    // boxes.forEach((box) => {
    //   box.classList.remove("hidden", "expand");
    // });

    thisBox.classList.toggle("expand");
    otherBox.classList.toggle("hidden");
  });
});
