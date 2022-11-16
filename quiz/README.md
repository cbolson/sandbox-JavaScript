# HTML + CSS + JavaScript Quiz

Date : 2022-11-14

Date mod : 2022-11-14

## Description:

- HTML, CSS, JavaScript
- Simple quiz with random questions retrived via api

## Changes made so far:

- retrieve random quesetions via api https://opentdb.com
- placing questions and answers in container
- correct answer detecting

## Things I want to do:

- [ ] fetch questions via api (see below)
- [ ] keep score
- [ ] reset quiz to get new questions
- [ ] category select
- [ ] dynamic CSS including animations between question cards.

#### Sources

- JavaScript quiz tutorial: Web Dev Simplified - https://www.youtube.com/watch?v=riDzcEQbX6k
- Questions Api:https://opentdb.com

```js
const api = `https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986`;
```

Fetch data from here 👆👆👆. This is the Open Trivia Database, they have thousands of questions. The documentation for this api is [here](<[https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)>).
