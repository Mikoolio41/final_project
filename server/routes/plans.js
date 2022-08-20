const express = require("express");
const { updateUser, writeUser, readUser } = require("../modules/plansInput");
const router = express.Router();

//route to read info from db
router.get("/", readUser);

//route to write info to db
// router.get("/ehud", writeUser);

//route to update info in db
router.get("/update", updateUser);

module.exports = router;
