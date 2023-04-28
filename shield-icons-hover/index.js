/*
    Shield.id badge hover
	The badges logos are from shield.io which doesn't appear to allow a hover state
	
    I have added the color for each image with these attributes:
    hover-bg = hover background color
    hover-clr = hover icon color

    Note - I believe that the shield.io code is automatically defining the text color to contrast with the background color.
*/

// get all badges
const badges = document.querySelectorAll("#badges img");

badges.forEach((badge) => {
  // get hover icon & bg color
  const hoverClr = badge.getAttribute("hover-clr");
  const hoverBg = badge.getAttribute("hover-bg");

  // get original src
  const srcOrig = badge.getAttribute("src");
  // create new src value
  let srcHover = srcOrig
    .replace("&logoColor=000000", `&logoColor=${hoverClr}`)
    .replace("-DDDDDD", `-${hoverBg}`);

  // on hover replace the original image source with the hover source
  badge.addEventListener("mouseover", () => {
    badge.setAttribute("src", srcHover);
  });

  // on mouseout put the original src back
  badge.addEventListener("mouseout", () => {
    badge.setAttribute("src", srcOrig);
  });
});
