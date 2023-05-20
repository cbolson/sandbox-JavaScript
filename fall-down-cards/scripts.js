const cards = [...document.querySelectorAll(".card")];
// reverse order from dom to make the first defined card the fron one
cards.reverse();
const numCards = cards.length;
const cardStyles = [];
//console.log(cards);

let opacity = 1;
let offsetY = 0;
let scale = 1;
let delay = 2000;

// incremental values
let opacityDiff = 0.25;
let scaleDiff = 0.1;
let offsetYDiff = 50;
let delayYDiff = 3000;

counter = 1;

function setStyles(card, styles) {
  console.log(styles);
  if (styles.opacity) card.style.opacity = styles.opacity;
  if (styles.scale) card.style.scale = styles.scale;
  if (styles.transform) card.style.transform = styles.transform;
  if (styles.offsetY) card.style.translate = `0 ${styles.offsetY}px`;
}

cards.forEach((card, idx) => {
  // set styles for each card (smaller, more opacity and higher in the viewport)
  const styles = {
    opacity: opacity,
    transform: "",
    scale: scale,
    offsetY: offsetY,
  };
  //console.log(styles);
  // update card with new styles
  setStyles(card, styles);

  const transitionStyles = {
    opacity: "0",
    offsetY: 100,
    scale: 1.02,
    transform: "rotate3d(-1, 0, 0, 5deg)",
  };

  const interval = setInterval(() => {
    // animate current card
    setStyles(card, transitionStyles);

    // remove current card
    cards.splice(idx, 1);

    //update remaining cards - scale, position and opacity
    // cards.forEach((card2, idx2) => {
    //   const compStyles = window.getComputedStyle(card2);
    //   const currentY = compStyles
    //     .getPropertyValue("translate")
    //     .split(" ")[1]
    //     .split("px")[0];
    //   const newOpacity =
    //     Number(compStyles.getPropertyValue("opacity")) + opacityDiff;
    //   const newScale = Number(compStyles.getPropertyValue("scale")) + scaleDiff;
    //   const newPos = Number(currentY) + offsetYDiff;

    //   const updateStyles = {
    //     opacity: newOpacity,
    //     translate: newPos,
    //     scale: newScale,
    //     transform: "",
    //   };
    //   setStyles(card2, updateStyles);
    // });
    // console.log(counter, numCards);
    counter++;
    //console.log(counter, numCards);
    if (counter >= numCards) clearInterval(interval);
  }, (delay = delay));

  // update values for next card
  opacity = opacity - opacityDiff;
  offsetY = offsetY - offsetYDiff;
  scale = scale - scaleDiff;
  delay = delay + delayYDiff;
});
