// import daily electricity prices via api
// GET /request
// Host: anywhere.com
// Origin: https://api.preciodelaluz.org

const ctx = document.getElementById("chart");
const urlData = "https://api.preciodelaluz.org/v1/prices/now?zone=PCB";

async function getData() {
  const response = await fetch(urlData, {
    method: "GET",
    mode: "no-cors",
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data)
}

getData();
