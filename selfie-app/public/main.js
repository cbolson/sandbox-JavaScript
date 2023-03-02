// get position from browser
// (async function getPosition() {
//   if ("geolocation" in navigator) {
//     console.log("YES");
//     navigator.geolocation.getCurrentPosition((position) => {
//       const data = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//       };
//       saveData(data);
//       initMap(data);
//     });
//   } else {
//     console.log("Not connected");
//   }
// })();

// // save data
// async function saveData(data) {
//   const { lat, lng } = data;
//   document.querySelector("#latitude").innerText = lat;
//   document.querySelector("#longitude").innerText = lng;

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   const response = await fetch("/api", options);
//   const json = await response.json();
//   console.log(json);
// }

// function initMap(data) {
//   const { lat, lng } = data;
//   const mapZoom = 6;
//   const map = L.map("map").setView([lat, lng], mapZoom); // "L" = Leaflet
//   const attribution =
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
//   const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
//   const tiles = L.tileLayer(tileUrl, { attribution });
//   tiles.addTo(map);
//   const marker = L.marker([lat, lng]).addTo(map);
// }

let lat, lon;
const button = document.querySelector("#submit");
const moodEl = document.querySelector("#mood");

button.addEventListener("click", async (event) => {
  const mood = moodEl.value;
  const data = { lat, lon, mood };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api", options);
  const json = await response.json();
  console.log(json);
});

if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;
  });
} else {
  console.log("geolocation not available");
}
