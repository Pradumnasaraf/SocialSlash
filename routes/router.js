const express = require("express");
const router = express.Router();

const getRoot = require("../controllers/getRoot");
const linkCheckRedirect = require("../controllers/linkCheckRedirect");

router.get("/", getRoot);
router.get("/:endpoint", linkCheckRedirect);

module.exports = router;
