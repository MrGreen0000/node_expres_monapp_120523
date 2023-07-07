const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Jean",
    authenticated: true,
    friends: 11,
    products: [
      { title: "product1", content: "content1" },
      { title: "product2", content: "content2" },
      { title: "product3", content: "content3" },
    ],
    title: "Aladin",
  });
});

const server = app.listen(5000, () => {
  const port = server.address().port;
  const link = `http://localhost:${port}`;
  console.log(
    `Le serveur est en cours d'exécution sur le port <a href="${link}" target="_blank">${port}</a>`
  );
});
