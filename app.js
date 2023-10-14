const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app
  .route("/user/userId", (req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.send("user");
  })
  .put((req, res) => {
    res.send("user");
  })
  .delete((req, res) => {
    res.send("user");
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
