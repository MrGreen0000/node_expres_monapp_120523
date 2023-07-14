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
  } else {
    console.log("user ko ");
  }
  next();
};

app.use("/foo", getCurrentUser, isAuthenticated);

app.get("/foo", (req, res) => {
  res.render("index");
});

const server = app.listen(3000);
