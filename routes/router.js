const express = require("express");
const fs = require("fs");
const path = require("path");

let rawdata = fs.readFileSync(path.join(__dirname, "../public/links.json"));
let links = JSON.parse(rawdata);

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is working fine :)");
});

router.get("/github", (req, res) => {
  if (links.github === "" || links.github === null) {
    res.send("Link not found");
  } else {
    res.redirect(links.github);
  }
});
router.get("/twitter", (req, res) => {
  if (links.twitter === "" || links.twitter === null) {
    res.send("Link not found");
  } else {
    res.redirect(links.twitter);
  }
});
router.get("/linkedin", (req, res) => {
  if (links.linkedin === "" || links.linkedin === null) {
    res.send("Link not found");
  } else {
    res.redirect(links.linkedin);
  }
});
router.get("/facebook", (req, res) => {
  if (links.facebook === "" || links.facebook === null) {
    res.send("Link not found");
  } else {
    res.redirect(links.facebook);
  }
});
router.get("/hashnode", (req, res) => {
  if (links.hashnode === "" || links.hashnode === null) {
    res.send("Link not found");
  } else {
    res.redirect(links.hashnode);
  }
});
module.exports = router;
