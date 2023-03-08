const LETTERS = "ABCEDEFGHIJKLMNOOPQRSTUVWXYZ";
const hyper = document.querySelector(".hyper");
const arrValues = hyper.getAttribute("data-values").split(",");
const shuffleMode = hyper.getAttribute("shuffle-mode");
const arrLength = arrValues.length;
const delay = 3000; // delay between each word shuffle
let counter = 0;
console.log("mode", shuffleMode);
// true = use random charaters for each new word,
// false = use last word as base for next word
function shuffleAll() {
  shuffleWord(arrValues[counter]);
  counter++;
  if (counter == arrLength) {
    counter = 0;
  }
  setTimeout(shuffleAll, delay);
}
setTimeout(shuffleAll, 0);

function shuffleWord(word) {
  let iterations = 0;
  txtLength = word.length;
  currentWord = hyper.innerText;
  const interval = setInterval(() => {
    hyper.innerText = word
      .split("")
      .map((letter, idx) => {
        if (idx == 0) {
          // return first letter straight away
          return letter;
        }
        if (idx < iterations) {
          // return letters to this position
          return letter;
        }
        // return random letter (or letter at this position from previous word)
        if (shuffleMode == "lastword") return currentWord.charAt(idx);
        else return LETTERS[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= txtLength) {
      // stop when we have completed the word
      clearInterval(interval);
    }
    // number of steps to take on each iteration
    iterations += 1;
  }, 60);
}
