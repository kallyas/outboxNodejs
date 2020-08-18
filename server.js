const http = require("http");
const HttpDispatcher = require("httpdispatcher");
const dispatcher = new HttpDispatcher();

const PORT = 7000;

// const server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World");
// }).listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);
// });

function handleRequest(req, res) {
  try {
    // log the request on console
    console.log(req.url);
    // Dispatch
    dispatcher.dispatch(req, res);
  } catch (err) {
    console.log(err);
  }
}

const server = http.createServer(handleRequest).listen(PORT, () => {
  console.log("Server listening on: http://localhost:%s", PORT);
});

//A sample GET request
dispatcher.onGet("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hey, this is the homepage of your server</h1>`);
});

//when something wrong happens
dispatcher.onError(function (req, res) {
  res.writeHead(404);
  res.end("Error, the URL doesn't exist");
});

//sample end point
dispatcher.onGet("/welcome", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome homepage");
});
