const express = require("express");
const { test1 } = require("../controllers/plans");
// const { writeTest } = require("../controllers/plans");

const router = express.Router();

router.post("/db", test1);

// router.post("/", askQuestion);
// router.put("/api/plan", writeTest);

module.exports = router;
