// app.js

/*
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // get path user is visiting
  let path = "./pages/";

  // switch statement to handle page selection
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404; // error code
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// run on 3000 since 8080 is already used by another application
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
*/

const express = require("express");

// express app
const app = express();

// listen for requests
// running on port 3006
app.listen(3006);

app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./pages/contact-me.html", { root: __dirname });
});

// 404 page
// at bottom so it fires last
app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});
