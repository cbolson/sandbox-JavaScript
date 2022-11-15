// function quizQuestions(){
//     fetch("https://opentdb.com/api.php?amount=10&category=22")
//     .then((res) => res.json())
//     .then((out) => {
//         return out;
//     // console.log("Output: ", out);
//     })
//     .catch((err) => console.error(err));
//   }

//   const questions=quizQuestions();
//   console.log(questions);

//const fetch = require("node-fetch");

// async function loadNames() {
//   const response = await fetch(
//     "https://opentdb.com/api.php?amount=10&category=22"
//   );
//   const names = await response.json();

//   console.log(names);
//   // logs [{ name: 'Joker'}, { name: 'Batman' }]
// }
// const questions = loadNames();
// console.log(names);

// let questionsArr = Array();
// const url = "https://opentdb.com/api.php?amount=10&category=22";

// const getQuestions = () => {
//   fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((questions) => {
//       console.log("questions inside del fetch:", questions);

//       questionsArr = {...questions}
//       //   for (let i = 0; i < questions.length; i++) {
//       //     questionsArr[i] = questions[i];
//       //   }
//     })
//     .catch(function (error) {
//       console.log("¡Error!", error);
//     });
// };

// getQuestions();
// console.log(`My array: %{questionsArr}`);


(async () => {
  async function getQuestions(id_cat) {
    const url = `https://opentdb.com/api.php?amount=10&category=${id_cat}`;

    const response = await fetch(url);
    const repositories = await response.json();

    return repositories;
  }
  const repos = await getQuestions(22);
  console.log(repos);
})();