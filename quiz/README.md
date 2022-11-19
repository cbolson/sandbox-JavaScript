# HTML + CSS + JavaScript Quiz

## Description:

- HTML, CSS, JavaScript
- Quiz with multiple categories and questions retrieved via api (see source below)

## Additions:

- &check; Fetch questions via api (see below)
- &check; Keep user score
- &check; Reset quiz to get new questions
- &check; Set card border color according to question difficulty level
- &check; Category select (I wanted to get the list via the api but it appears that many of the categories are no longer working).
- &check; Show user final score and rating
- &check; Show selected category in card

## Wish List

- [ ] Add timer for each question
- [ ] dynamic CSS including animations between question cards.
- [ ] indicate question progress to show how many questions are left

### Sources

- JavaScript tutorial: Web Dev Simplified - https://www.youtube.com/watch?v=riDzcEQbX6k
- Questions Api: https://opentdb.com

```js
const api = `https://opentdb.com/api.php?amount=10&encode=url3986&token=XXXXX`;
```
