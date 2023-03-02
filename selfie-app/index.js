// load server
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.listen(port, () => console.log("listening at port 3000"));
app.use(express.static(__dirname + "/public"));
app.use(express.json({ limit: "1mb" }));
// const bodyParser = require("body-parser");

// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

// app.use(bodyParser.json());

// app.post("/api", (request, response) => {
//   console.log("I got a request");
//   console.log(request.body);
// });

// respond with "hello world" when a GET request is made to the homepage
// app.get("/api", (req, res) => {
//   res.send("hello world");
// });

// array of locations (only for this session at the moment)
const locations = [];

// POST method route
app.post("/api", (request, response) => {
  console.log("I got a request");
  const data = request.body;
  // add location data to object along with timestamp
  const newLocation = {
    lat: data.lat,
    lng: data.lng,
    ts: Date.now(),
  };
  locations.push(newLocation);

  // convert to string to write to file
  const jsonContent = JSON.stringify(locations);
  fs.writeFile(__dirname + "/data/my-locations.txt", jsonContent, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Written to file");
  });

  response.json(locations);
});
