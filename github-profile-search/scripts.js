const URL_API = "https://api.github.com/users/";

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const elResult = document.querySelector("#result");

// search for user
async function getUser(username) {
  const response = await fetch(URL_API + username);

  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    elResult.innerText = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }
  const data = await resp.json();
  renderUser(data);
  fetchReps(username);
}

// get user repos
async function fetchReps(username) {
  const response = await fetch(URL_API + username + "/repos");
  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    elResult.innerText = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }
  const respData = await response.json();
  renderRepos(respData);
}

function renderRepos(repos) {
  const elRepos = document.querySelector("#repos");

  repos.forEach((repo) => {
    const elRepo = document.createElement("a");
    elRepo.href = repo.html_url;
    elRepo.target = "_blank";
    elRepo.innerText = repo.name;
    elRepos.appendChild(elRepo);
  });
}

function renderUser(user) {
  const cardHTML = `
      
          <div>
              <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
          </div>
          <div class="user-info">
              <h2><a href="${user.html_url}" target="_blank" class="material-symbols-outlined">link</a> ${user.name}</h2>
              <h3>${user.bio}</h3>
              <p>Location :${user.location}</p>
              <ul class="info">
                  <li>Followers: ${user.followers}</li>
                  <li>Following: ${user.following}</li>
                  <li>Repositorios: ${user.public_repos}</li>
              </ul>
              <div id="repos" class="repos"></div>
          </div>
     
  `;

  elResult.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

//getUser("cbolson");
