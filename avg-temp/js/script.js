getData();

async function getData() {
  const response = await fetch("temp-data.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);

  table.forEach((row) => {
    const cols = row.split(",");
    const year = cols[0];
    const temp = cols[1];
    console.log(year, temp);
  });
}
