const listEl = document.querySelector("#data-list");
async function getData() {
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);
  for (item of data) {
    const d = new Date(item.ts).toLocaleDateString();
    const li = document.createElement("li");
    li.textContent = `${item.userName} : (${item.lat},${item.lon}) - ${d}`;
    listEl.append(li);
  }
}

getData();
