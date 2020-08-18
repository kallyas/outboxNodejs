const express = require("express");

//initialize express
const app = express();

//define port 3000
const PORT = 3000;

// on the request to root (localhost:3000/)
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      name: "express -server",
      version: "1.0.0",
    })
  );
});

// On localhost:3000/welcome
app.get("/welcome", (req, res) => {
  res.send("<b>Hello</b> welcome to my http server made with express");
});

// Change the 404 message modifing the middleware
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(PORT, () => {
  console.log("Example app listening on port 3000.");
});
