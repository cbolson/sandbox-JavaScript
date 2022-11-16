const startButton = document.getElementById("btn-start");
const nextButton = document.getElementById("btn-next");
const levelElement = document.getElementById("quiz__level");
const questionContainerElement = document.getElementById("question__container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer_buttons");

let currentQuestionIndex, correctAnswer, shuffleAnswers, answerScore;
let userScore = 0;
// define score according to question difficulty level
const levelScore = {
  easy: 1,
  medium: 2,
  difficult: 3,
};

let questions = [];
// get questions from remote api
const idCat = 22; // Geography (there are many categories - maybe I could add a category selector)
(async () => {
  async function getQuestions(id_cat) {
    const url = `https://opentdb.com/api.php?amount=10&category=${id_cat}`;

    const response = await fetch(url);
    const repositories = await response.json();

    return repositories.results;
  }
  questions = await getQuestions(idCat);
  // console.log(questions);
})();

// start button - start game
startButton.addEventListener("click", startGame);

// next button - increase question index and set question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// start game
function startGame() {
  // hide start button
  startButton.classList.add("hide");

  // show question container
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;

  setNextQuestion();
}

function resetState() {
  clearStatusClass(document.body);

  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}
// ​​result from api:
// category: "Geography"
// correct_answer: "Jakarta"
// difficulty: "easy"
// incorrect_answers: Array(3) [ "Bandung", "Medan", "Palembang" ]
// question: "What is the capital of Indonesia?"
// type: "multiple"

function showQuestion(question) {
  console.log(question);
  // add question
  questionElement.innerText = question.question;

  // define level
  levelElement.innerText = question.difficulty;

  answerScore = levelScore[question.difficulty];

  // get value of correct answer to be able to check against selected answer - ideally we would use an id rather than the text value
  correctAnswer = question.correct_answer;

  // need to combine answers (wrong + correct) into an array
  const answers = [...question.incorrect_answers];
  answers.push(correctAnswer);

  // random sort so that correct answer is not always last
  shuffleAnswers = answers.sort(() => Math.random() - 0.5);

  //console.log(shuffleAnswers);

  // add answers
  shuffleAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  console.log(
    `selected: ${selectedButton.innerText}\n correct: ${correctAnswer}`
  );

  if (selectedButton.innerText === correctAnswer) {
    setStatusClass(selectedButton, "correct");
    // add score to userScore total
    addScore(answerScore);
  } else {
    setStatusClass(selectedButton, "");

    // show correct answer
  }

  console.log(`Current Score: ${userScore}`);
  //const correct = selectedButton.dataset.correct;
  //setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    //   setStatusClass(button, button.dataset.correct);
    if (button.textContent.includes(correctAnswer)) {
      setStatusClass(button, "correct");
    }
    // remove event
    button.removeEventListener("click", selectAnswer);
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    // questionElement.innerText = "you have finished the quiz";
    // answerButtonElement.innerText = "";
    startButton.innerText = "Start Again";
    startButton.classList.remove("hide");
    //resetState();
  }
}

function setStatusClass(el, correct) {
  clearStatusClass(el);
  if (correct) {
    el.classList.add("correct");
  } else {
    el.classList.add("wrong");
  }
}

function clearStatusClass(el) {
  el.classList.remove("correct");
  el.classList.remove("wrong");
}

const addScore = (score) => (userScore = userScore + score);
