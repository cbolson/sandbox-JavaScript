const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  const isOpened = hamburger.getAttribute("aria-expanded");
  if(isOpened==="false"){
    hamburger.setAttribute("aria-expanded",true);
  }else{
    hamburger.setAttribute("aria-expanded", false);
  }
  menu.classList.toggle("show-menu");
});
