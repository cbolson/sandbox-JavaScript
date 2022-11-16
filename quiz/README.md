# HTML + CSS + JavaScript Quiz

Date : 2022-11-14

Date mod : 2022-11-14

## Description:

- HTML, CSS, JavaScript
- Simple quiz with random questions retrived via api

## Changes made so far:

- retrieve random questions via api (see below)
- placing questions and answers in container
- correct answer detecting

## Things I want to do:

- &#9745; fetch questions via api (see below)
- &#9745; keep score
- &#9745; reset quiz to get new questions
- &#9744; category select
- &#9744; dynamic CSS including animations between question cards.

## If I have time

- &#9744;Fetch list of categories to allow user to select which category they want to do
- &#9744;

#### Sources

- JavaScript quiz tutorial: Web Dev Simplified - https://www.youtube.com/watch?v=riDzcEQbX6k
- Questions Api:https://opentdb.com

```js
const api = `https://opentdb.com/api.php?amount=10&encode=url3986`;
```

Fetch data from here 👆👆👆. This is the Open Trivia Database, they have thousands of questions. The documentation for this api is [here](<[https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)>).
