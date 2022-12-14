import { apiKey } from "./_keys.js";

//console.log(apiKey);

const containerElement = document.querySelector("[data-results]");
let jokes = [];

const loadJokes = async () => {
  try {
    const res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=10", {
      headers: {
        "X-Api-Key": `${apiKey}`,
      },
    });
    jokes = await res.json();
    //console.log(jokes);
    displayJokes(jokes);
  } catch (err) {
    console.error(err);
  }
};

const displayJokes = (jokes) => {
  const htmlString = jokes
    .map((joke) => {
      return `
            <li class="character">
                <p>House: ${joke.joke}</p>
            </li>
        `;
    })
    .join("");
  //console.log(htmlString);
  containerElement.innerHTML = htmlString;
};

loadJokes();
