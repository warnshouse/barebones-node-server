const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const PORT = 8000;

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  if (page == "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, {"Content-type": "text/html"});
      res.write(data);
      res.end();
    });
  }
  else if (page == "/api") {
    if ("flip" in params) {
      if (params["flip"] == "coin") {
        const coinFlip = Math.round(Math.random()) ? "Heads" : "Tails";
        res.writeHead(200, {"Content-Type": "application/json"});
        const objToJson = {
          result: coinFlip
        };
        res.end(JSON.stringify(objToJson));
      }
    }
  }
  else if (page == "/js/main.js") {
    fs.readFile("js/main.js", (err, data) => {
      res.writeHead(200, {"Content-Type": "text/javascript"});
      res.write(data);
      res.end();
    })
  }
  else {
    fs.readFile("fourohfour.html", (err, data) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  }
});

server.listen(process.env.PORT || PORT, () => console.log(`The server is now running on port ${PORT}.`));