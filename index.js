const express = require("express");
const library = require('./library');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    name: "books",
  });
});

app.get('/books', (req, res) => {
    res.json(library)
})
app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(port, () => {
  console.log(`Starting application at port: ${port}`);
});
