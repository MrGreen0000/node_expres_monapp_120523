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

app.param(["userId", "companyId"], (req, res, next, value, name) => {
  // console.log({
  //   value,
  //   name,
  // });
  const user = {
    id: value,
    name: "Jean",
  };
  console.log("in fn");
  req.user = user;
  next();
});

app.get("/user/:userId/:companyId", (req, res) => {
  // console.log(req.params);
  console.log(req.user);
  res.end();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.render("index");
});

app.listen(3000);
