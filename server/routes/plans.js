const express = require("express");
const { writeTest } = require("../controllers/plans");

const router = express.Router();

// router.post("/", askQuestion);
router.put("/api/plan", writeTest);

module.exports = { router };
