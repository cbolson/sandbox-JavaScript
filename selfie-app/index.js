// load server
const express = require("express");
const Datastore = require("nedb");
//const fs = require("fs");
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
// array of locations (only for this session at the moment)
const database = new Datastore(__dirname + "/data/database.db");
database.loadDatabase();

// respond with "hello world" when a GET request is made to the homepage
app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    if(err){
        console.log(err);
    }else{
      response.json(data);
    }
  });
});

// POST method route
app.post("/api", (request, response) => {
  console.log("I got a request");
  const data = request.body;
  data.ts = Date.now();
  database.insert(data);

  //database.insert(data);

  //   // convert to string to write to file
  //   const jsonContent = JSON.stringify(database);
  //   fs.writeFile(__dirname + "/data/my-locations.txt", jsonContent, (err) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log("Written to file");
  //   });

  response.json(data);
});
