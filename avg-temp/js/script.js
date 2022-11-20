const ctx = document.getElementById("chart");
const urlData = "temp-data.csv";
chartIt();

async function getData() {
  const response = await fetch(urlData);
  const data = await response.text();
  const xDataYears = [];
  const avgGlobal = [];
  const avgNorthHem = [];
  const avgSouthHem = [];

  const table = data.split("\n").slice(1);

  table.forEach((row) => {
    const cols = row.split(",");
  
    xDataYears.push(cols[0]);

    avgGlobal.push(parseFloat(cols[1]) + 14);
    avgNorthHem.push(parseFloat(cols[2]) + 14);
    avgSouthHem.push(parseFloat(cols[3]) + 14);
    //
  });
  return { xDataYears, avgGlobal, avgNorthHem, avgSouthHem };
  //console.log(yTemps);
}
async function chartIt() {
  const data = await getData();
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.xDataYears,
      datasets: [
        {
          label: "Global",
          data: data.avgGlobal,
          borderWidth: 1,
        },
        {
          label: "Northern Hemisphere",
          data: data.avgNorthHem,
          borderWidth: 1,
        },
        {
          label: "Southern Hemisphere",
          data: data.avgSouthHem,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value, index, ticks) {
              return value + "°";
            },
          },
        },
      },
    },
  });
}
