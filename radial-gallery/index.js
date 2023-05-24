const images = document.querySelectorAll(".img");
images.forEach((img) => {
  img.addEventListener("mouseout", () => {
    // console.log("out");
    img.classList.add("rotate-out");
    setTimeout(function () {
      img.classList.remove("rotate-out");
    }, 350); // remove the class once it has finished animating out - this number must be the same (or a fraction higher) as the reavel-out animation time
  });
});
