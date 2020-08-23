const http = require("http");

http
  .createServer((req, res) => {
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    res.writeHead(200, {
      "Content-Type": "text-plain",
    });
    // 2. Write the announced text to the body of the page
    res.write("Hello world");

    // 3. Tell the server that all of the response headers and body have been sent
    res.end();
  })
  .listen(3000, () => {
    console.log(`Server Running at port 3000!`);
  });
