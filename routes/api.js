const express = require("express");
const router = express.Router();

router.get("/users", (rq, res) => {
  res.json([{ name: "jean" }]);
});

module.exports = router;
