const express = require("express");
const {
  createPlan,
  exerciseById,
  readUser,
  writeUser,
  getPic,
  updateUser,
  getExerciseByEquip,
} = require("../controllers/plans");
const router = express.Router();

// route to read info from db
router.get("/", readUser);

// route to write info to db
// router.get("/ehud", writeUser);

//route to update info in db
router.get("/update", updateUser);

//test getting gif
router.get("/picture", getPic);

module.exports = router;
