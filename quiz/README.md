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

## Additions:

- &check; Fetch questions via api (see below)
- &check; Keep user score
- &check; Reset quiz to get new questions
- &check; Set card border color according to question difficulty level
- &check; Category select (I wanted to get the list via the api but it appears that many of the cateories are no longer working).
- [ ] dynamic CSS including animations between question cards.
- &check; Show user final score and rating
- &check; Show selected category in card

## If I have time

- [ ] Add timer for each question

#### Sources

- JavaScript quiz tutorial: Web Dev Simplified - https://www.youtube.com/watch?v=riDzcEQbX6k
- Questions Api:https://opentdb.com

```js
const api = `https://opentdb.com/api.php?amount=10&encode=url3986`;
```

Fetch data from here 👆👆👆. This is the Open Trivia Database, they have thousands of questions. The documentation for this api is [here](<[https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)>).
