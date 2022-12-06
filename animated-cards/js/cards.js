let activeIndex = 0;

const groups = document.querySelectorAll(".card-group");
const btnsNav = document.querySelectorAll("[nav-direction]");

btnsNav.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.getAttribute("nav-direction");
    swapCards(direction);
  });
});

function swapCards(direction) {
  let nextIndex = "";
  if (direction == "next")
    nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  else nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "active";
  activeIndex = nextIndex;
}
