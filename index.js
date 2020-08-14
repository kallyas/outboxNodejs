const express = require("express")();
const app = express;
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      name: "express demo",
      version: "1.0.0",
      author: "kally",
    })
  );
});

app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(port, () => {
  console.log(`Starting application at port: ${port}`);
});
