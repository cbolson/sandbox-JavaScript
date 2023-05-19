const boxes = document.querySelectorAll(".box");

boxes.forEach((thisBox) => {
  const otherBox = boxes[thisBox.getAttribute("data-rel") - 1];
  const btn = thisBox.querySelector("button");
    let isOpen = false;
  btn.addEventListener("click", () => {
    //remove expand and hidden classes on all boxes
    // boxes.forEach((box) => {
    //   box.classList.remove("hidden", "expand");
    // });
console.log(isOpen);
    if (!isOpen){
        thisBox.classList.add("overlap", "expand");
        otherBox.classList.add("overlap", "hidden");
        isOpen = true;
    }else{
        thisBox.classList.remove("overlap", "expand");
        otherBox.classList.remove("overlap", "hidden");
        isOpen = false;
    }
  });
});
