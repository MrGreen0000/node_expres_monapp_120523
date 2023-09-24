const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const getCurrentUser = (req, res, next) => {
  req.user = {
    name: "toto",
    authenticated: true,
  };
  next();
};
const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated) {
    console.log("user ok");
    next();
  } else {
    next("route");
  }
};

app.use("/foo", getCurrentUser, isAuthenticated);

app.get("/foo", getCurrentUser, isAuthenticated, (req, res) => {
  res.render("index");
});

app.get("/foo", (req, res) => {
  res.sendStatus(403);
});

app.listen(3000);
