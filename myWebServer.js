const http = require("http");
const random = require("./randomNumber");
const server = http.createServer((req, res) => {
    const randomNumber = random();
    console.log(`Generated Random Number: ${randomNumber}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Random Number: ${randomNumber}`);
});

server.listen(1234, () => {
  console.log("server running");
});
