const startButton = document.getElementById("btn-start");
const nextButton = document.getElementById("btn-next");

const questionContainerElement = document.getElementById("question__container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer_buttons");

let shuffleQuestions, currentQuestionIndex;

// define questions (I want to get these from an external file)
const questions = [
  {
    question: "what day is it today?",
    answers: [
      { text: "Monday", correct: true },
      { text: "Sunday", correct: false },
    ],
  },
  {
    question: "Is it raining?",
    answers: [
      { text: "yes", correct: false },
      { text: "no", correct: false },
      { text: "could be", correct: true },
    ],
  },
  {
    question: "Could this code be improved?",
    answers: [
      { text: "Yes, of course", correct: true },
      { text: "no, this is pretty much it", correct: false },
    ],
  },
];

// start button - start game
startButton.addEventListener("click", startGame);
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
  //shuffle questions
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);

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
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  //console.log(question);
  // add question
  questionElement.innerText = question.question;
  // add answers
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
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
