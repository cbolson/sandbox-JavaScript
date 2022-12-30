const url = "https://jsonplaceholder.typicode.com/users";
const userCardTemplate = document.querySelector("[data-user-template]");
const resultsList = document.querySelector("[data-results-list]");
const searchStr = document.querySelector("[data-search-str]");

let users = [];
// load remote data (users) with anonymous function
(async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // add users to new array
    users = data.map((user) => {
      return {
        name: user.name,
        email: user.email,
      };
    });
  } catch {
    console.error(err);
  }
})();

// clear search box on focus
searchStr.addEventListener("focus", (e) => {
  e.target.value = "";

  // clear list
  //resultsList.innerHTML = "";
});

searchStr.addEventListener("input", (e) => {
  // clear list
  resultsList.innerHTML = "";

  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    if (
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    ) {
      // add to list
      const card = userCardTemplate.content.cloneNode(true).children[0];
      card.querySelector("[data-title]").textContent = user.name;
      card.querySelector("[data-details]").textContent = user.email;
      resultsList.append(card);
    }
  });
});
