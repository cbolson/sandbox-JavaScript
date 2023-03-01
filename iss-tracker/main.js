//const urlISS  = 'https://api.wheretheiss.at/v1/satellites';
const urlISS = "https://api.wheretheiss.at/v1/satellites/25544";
const mapZoom = 3;

// Leaflet
const map = L.map("map").setView([0, 0], mapZoom); // "L" = Leaflet

// OpenStreetMap tiles
const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });

// add tiles to map
tiles.addTo(map);

// map marker
const iconISS = L.icon({
  iconUrl: "./assets/satellite.png",
  iconSize: [64, 64],
  iconAnchor: [32, 32], // center
});
const marker = L.marker([0, 0], { icon: iconISS }).addTo(map);

// load iss position
async function getISS() {
  const response = await fetch(urlISS);
  const data = await response.json();
  addToMap(data);
}
// place marker on map and center
function addToMap(data) {
  const { latitude, longitude } = data;
  marker.setLatLng([latitude, longitude]);
  map.setView([latitude, longitude], map.getZoom());
}
getISS();
setInterval(getISS, 10000); // min rate 1second but we really don't need to update even that often
