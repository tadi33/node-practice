const http = require("http");
const fs = require("fs");
const mime = require("mime-types");

const server = http.createServer((req, res) => {
  let filePath = req.url;
  if (filePath === "/about") {
    filePath = "/about.html";
  } else if (filePath === "/") {
    filePath = "/index.html";
  }

  let requestedFile =
    __dirname + "/puppy lovers design bootstrap responsive/" + filePath;

  fs.readFile(requestedFile, (err, content) => {
    if (err) {
      const notFoundFile =
        __dirname + "/puppy lovers design bootstrap responsive/notFound.html";
      fs.readFile(notFoundFile, (err, notFoundContent) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 Not Found");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(notFoundContent);
        }
      });
    } else {
      const fileType = mime.lookup(filePath) || "application/octet-stream";
      res.writeHead(200, { "Content-Type": fileType });
      res.end(content);
    }
  });
});
server.listen(1235, () => {
  console.log("Server running on http://localhost:1235");
});
