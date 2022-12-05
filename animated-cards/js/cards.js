let activeIndex = 0;

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-last");
const groups = document.querySelectorAll(".card-group");

btnNext.addEventListener("click", () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "active";
  activeIndex = nextIndex;
});
btnPrev.addEventListener("click", () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "active";
  activeIndex = nextIndex;
});
