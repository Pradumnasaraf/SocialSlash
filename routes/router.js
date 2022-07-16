const express = require("express");
const fs = require("fs");
const path = require("path");

let rawdata = fs.readFileSync(path.join(__dirname, "../public/links.json"));
let links = JSON.parse(rawdata);

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is working fine :)");
});

router.get("/:name", (req, res) => {
  let name = req.params.name;
  let link = links[name];
  if (link) {
    res.redirect(link);
  } else {
    res.status(404).send("Link not found");
  }
});

module.exports = router;
