const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

let taskIdCounter = 0;
let taskList = {};

// Insert Routers Here

app.use(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Invalid Request.");
});

app.listen(3000);
