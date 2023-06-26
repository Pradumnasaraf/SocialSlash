import express from "express";

const router = express.Router();

import getRoot from "../controllers/getRoot.js";
import linkCheckRedirect from "../controllers/linkCheckRedirect.js";

router.get("/", getRoot);
router.get("/:endpoint", linkCheckRedirect);

export default router;
