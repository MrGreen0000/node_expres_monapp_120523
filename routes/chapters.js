const router = require("express").Router();
const Chapters = require("../database/models/chapter.model");
const util = require("util");

router.post("/", (req, res) => {
  const body = req.body;
  console.log({ body });
  const newChapter = new Chapters({
    ...body,
    active: body.active ? true : false,
  });
  console.log({ newChapter });
  newChapter
    .save()
    .then((chapter) => {
      console.log({ chapter });
      res.redirect("/");
    })
    .catch((err) => {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      console.log(
        util.inspect(err, {
          compact: true,
          depth: 5,
          breakLength: 80,
          colors: true,
        })
      );
      res.status(400).render("index", { errors });
    });
});

module.exports = router;
