const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  // let body = "";
  // req.on("data", (data) => {
  //   body += data;
  // });

  // req.on("end", () => {
  //   console.log(body);
  //   console.log(typeof body);
  //   res.render("index");
  // });

  console.log(req.body);

  res.render("index");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
