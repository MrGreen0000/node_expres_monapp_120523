const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/public/images/image.jpg", (req, res) => {
  const filePath = path.join(__dirname, "public/images/image.jpg");
  try {
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("Fichier non trouvé");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoie du fichier: ", error);
    res.status(500).send("Erreur interne du serveur");
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
