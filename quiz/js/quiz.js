// buttons
const startButton = document.querySelector("#btn-start");
const nextButton = document.querySelector("#btn-next");
const scoreButton = document.querySelector("#btn-score");

// elements
const levelElement = document.querySelector("#question-level");
const questionContainerElement = document.querySelector("#quiz-questions");
const quizWrapperElement = document.querySelector("#quiz-wrapper");
const answerButtonElement = document.querySelector("#answers");
const questionElement = document.querySelector("#question");
const msgElement = document.querySelector("#quiz-msg");
const headerElement = document.querySelector("#quiz-header");
const catSelectList = document.querySelector("#quiz-cat-id");
const quizCatTitleElement = document.querySelector("#quiz-cat-title");

// define number of questions to get
const numQuestions = 10;

let currentQuestionIndex, correctAnswer, shuffleAnswers, answerScore, txtPoints;

let questions = [];
let userScore = 0;
let possibleScore = 0;

// define score according to question difficulty level
const levelScore = {
  easy: 1,
  medium: 2,
  hard: 3,
};

// get api token to send with api fetch to avoid getting the same questions
let apiToken = "";
// API - get token
(async () => {
  async function getToken() {
    const url = "https://opentdb.com/api_token.php?command=request";

    const response = await fetch(url);
    const data = await response.json();
    apiToken = data.token;
  }
  await getToken();
})();

// start button - start/restart game
startButton.addEventListener("click", startGame);

// next button - increase question index and set question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
// show score button (visible at end of quiz)
scoreButton.addEventListener("click", showScore);

// start game
function startGame() {
  // hide elements - used when starting again
  addClass(questionContainerElement, "hide");
  addClass(headerElement, "hide");
  addClass(msgElement, "hide");
  questionElement.innerText = "";
  answerButtonElement.innerText = "";

  // get cat id for api url
  const catId = catSelectList.value; // I wanted to get the list of categories via the api but it appears that many of the categories no longer work

  // define selected cat title for car header
  const catTitle = catSelectList.options[catSelectList.selectedIndex].text;
  quizCatTitleElement.innerText = catTitle;

  // define apu url with cat, number of questions and token
  const urlQuiz = `https://opentdb.com/api.php?amount=${numQuestions}&encode=url3986&category=${catId}&token=${apiToken}`;

  // set current question index to 0 for new quiz
  currentQuestionIndex = 0;

  // fetch questions via api
  (async () => {
    async function getQuestions() {
      const url = `${urlQuiz}`;

      const response = await fetch(url);
      const repositories = await response.json();
      console.log(repositories);
      questions = [...repositories.results];

      // set up first question
      setNextQuestion();
    }
    await getQuestions();
  })();
}

// reset state
function resetState() {
  // show "next" button
  addClass(nextButton);
  // remove old answers
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

// prepare next question
function setNextQuestion() {
  resetState();
  // hide start button
  addClass(startButton, "hide");

  // show question
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  //console.log(`showQuestion: ${questions}`);

  const question = questions[index];
  if (!question) {
    alert("no question");
  } else {
    // add question
    questionElement.innerText = decodeURIComponent(question.question);
    possibleScore = possibleScore + levelScore[question.difficulty];
    console.log(possibleScore);
    // define points text (single if only 1 point awarded)
    let txtPoints = question.difficulty == "easy" ? "point" : "points";
    // show level and possible points to score
    levelElement.innerText = decodeURIComponent(
      `Level: ${question.difficulty} (${
        levelScore[question.difficulty]
      } ${txtPoints})`
    );
    removeClass(levelElement, "hide");

    quizWrapperElement.classList.add(question.difficulty);
    answerScore = levelScore[question.difficulty];
    // console.log(answerScore);
    // get value of correct answer to be able to check against selected answer - ideally we would use an id rather than the text value
    correctAnswer = decodeURIComponent(question.correct_answer);

    // need to combine answers (wrong + correct) into an array
    const answers = [...question.incorrect_answers];
    // add correct answer
    answers.push(correctAnswer);

    // random sort so that correct answer is not always last
    shuffleAnswers = answers.sort(() => Math.random() - 0.5);

    //console.log(shuffleAnswers);

    // add answers
    shuffleAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = decodeURIComponent(answer);
      button.classList.add("btn");
      button.addEventListener("click", selectAnswer);
      answerButtonElement.appendChild(button);
    });

    // show question container

    removeClass(quizWrapperElement, "hide");
    removeClass(questionContainerElement, "hide");
    // show next button
    removeClass(nextButton, "hide");
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  // console.log(
  //   `selected: ${selectedButton.innerText}\n correct: ${correctAnswer}`
  // );

  if (selectedButton.innerText === correctAnswer) {
    // mark as correct
    addClass(selectedButton, "correct");
    // add score to userScore total
    addScore(answerScore);
  } else {
    // mark as incorrect
    addClass(selectedButton, "wrong");
  }
  // remove event from buttons to avoid clicking again
  Array.from(answerButtonElement.children).forEach((button) => {
    if (button.textContent.includes(correctAnswer)) {
      // show correct answer
      setStatusClass(button, "correct");
    }
    // remove event
    button.removeEventListener("click", selectAnswer);
  });
  // show next button if we have more questions
  if (questions.length > currentQuestionIndex + 1) {
    removeClass(nextButton, "hide");
  } else {
    addClass(nextButton, "hide");
    removeClass(scoreButton, "hide");
    // show message to indicate that the user has finished
    levelElement.innerText = "You have finished";
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
  el.classList.remove("correct", "wrong", "easy", "medium", "hard");
}

// show user score and button to restart
function showScore() {
  clearStatusClass(quizWrapperElement);

  addClass(scoreButton, "hide");
  addClass(nextButton, "hide");
  addClass(levelElement, "hide");
  addClass(quizWrapperElement, "hide");

  msgElement.innerHTML = `You scored <strong>${userScore}</strong>/${possibleScore}`;
  removeClass(msgElement, "hide");
  removeClass(headerElement, "hide");

  //startButton.innerText = "Start Again";
  removeClass(startButton, "hide");
}

// add  class to element
function addClass(el, className = "hide") {
  el.classList.add(`${className}`);
}

// remove class from element
function removeClass(el, className = "hide") {
  el.classList.remove(`${className}`);
}
const addScore = (score) => (userScore = userScore + score);

// ​​result from api:
// category: "Geography"
// correct_answer: "Jakarta"
// difficulty: "easy"
// incorrect_answers: Array(3) [ "Bandung", "Medan", "Palembang" ]
// question: "What is the capital of Indonesia?"
// type: "multiple"
