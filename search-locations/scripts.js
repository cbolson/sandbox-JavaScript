const urlApi = "https://geocoding-api.open-meteo.com/v1/search?";
const minChars = 3; // minimum number of characters before we call the api

const cardTemplate = document.querySelector("[data-results-template]");
const listResultsEl = document.querySelector("[data-results-list]");
const searchStrField = document.querySelector("[data-search-str]");
const storedResultsWrapper = document.querySelector("[data-stored-results]");
const listSavedEl = storedResultsWrapper.querySelector("[data-saved-results]");

// define and get saved locations
savedLocations = JSON.parse(localStorage.getItem("locations")) || [];

//console.log(savedLocations);
let locations = [];

// clear search box on focus
searchStrField.addEventListener("focus", (e) => {
  e.target.value = "";

  // clear list
  listResultsEl.innerHTML = "";
});

// search string - detect input
searchStrField.addEventListener("input", (e) => {
  // clear list
  listResultsEl.innerHTML = "";
  const value = e.target.value.toLowerCase();

  if (value.length > minChars) {
    checkDataViaApi(value);
  }
});

// call api with search value
const checkDataViaApi = async (value) => {
  const paramsString = `name=${value}`;
  const searchParams = new URLSearchParams(paramsString);
  const response = await fetch(urlApi + searchParams);
  const data = await response.json();
  addResultToList(data);
};

// add result to list
function addResultToList({ results }) {
  results.forEach((location) => {
    const card = cardTemplate.content.cloneNode(true).children[0];

    const locationName = location.name;
    const locationAddress = `${location.admin3}, ${location.country}`;

    const cardName = (card.querySelector("[data-title]").textContent =
      locationName);
    const cardAddress = (card.querySelector("[data-details]").textContent =
      locationAddress);
    const cardSave = card.querySelector("[data-save]");

    listResultsEl.append(card);

    cardSave.addEventListener("click", (e) => {
      // send this value to localstorage as saved locations
      cardSave.classList.add("saved");
      addStorage(location);
    });
  });
}

// add item to local storage
function addStorage({
  id,
  name,
  latitude,
  longitude,
  admin3,
  country,
  timezone,
}) {
  savedLocations.push({
    id,
    name,
    latitude,
    longitude,
    admin3,
    country,
    timezone,
  });
  localStorage.setItem("locations", JSON.stringify(savedLocations));
  showSavedList();
}


// update localstorage then display items
function showSavedList() {
  listSavedEl.innerHTML = "";
  if (savedLocations.length > 0) {
    storedResultsWrapper.classList.remove("hidden");
  }
  //  console.log(savedLocations);
  savedLocations.forEach((location) => {
    displaySavedItem(location);
  });

  
}

// add saved location to list
function displaySavedItem(location) {
  //console.log(location.name);

  const card = cardTemplate.content.cloneNode(true).children[0];
  const locationName = location.name;
  const locationAddress = `${location.admin3}, ${location.country}`;
  const cardName = (card.querySelector("[data-title]").textContent =
    locationName);
  const cardAddress = (card.querySelector("[data-details]").textContent =
    locationAddress);
  const cardSave = card.querySelector("[data-save]");
  cardSave.classList.add("saved");

  listSavedEl.append(card);

  cardSave.addEventListener("click", (e) => {
    // remove this item from saved locations
    savedLocations = savedLocations.filter((t) => t != location);
    localStorage.setItem("locations", JSON.stringify(savedLocations));
    // reload list after slight delay (need to slide up)
     setInterval(function () {
       showSavedList();
     }, 300);

    
  });
}

// load saved locations
showSavedList();






// data returned for each location
// id: 2654034,
// name: "Caldbeck",
// latitude: 54.7486, … }
// ​​admin1: "England"
// ​​admin1_id: 6269131
// ​​admin3: "Allerdale District"
// ​​admin3_id: 7290662
// ​​admin4: "Caldbeck"
// ​​admin4_id: 7294760
// ​​country: "United Kingdom"
// ​​country_code: "GB"
// ​​country_id: 2635167
// ​​elevation: 163
// ​​feature_code: "PPL"
// ​​id: 2654034
// ​latitude: 54.7486
// ​​longitude: -3.05111
// ​​name: "Caldbeck"
// ​​population: 311
// ​​timezone: "Europe/London"
