const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "toto");

app.engine("toto", (path, options, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    }
    const template = data.toString().replace("%name", options.name);
    callback(null, template);
  });
});

app.get("/", (req, res) => {
  res.render("index", { name: "Jean" });
});

app.listen(5000);
