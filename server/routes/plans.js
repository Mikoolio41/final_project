const express = require("express");
const { test1, updateUser, writeUser } = require("../controllers/plans");

const router = express.Router();

router.get("/", test1);
router.get("/ehud", writeUser);
router.get("/update", updateUser);

module.exports = router;
