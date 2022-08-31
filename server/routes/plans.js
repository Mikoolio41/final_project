const express = require("express");
const {
  createPlan,
  exerciseById,
  readUser,
  writeUser,
  getPic,
  updateUser,
  getUserPlan,
  insertUserDb,
  userLogin,
} = require("../controllers/plans");
const router = express.Router();

// route to read info from db
router.get("/read", readUser);

// route to write info to db
// router.get("/ehud", writeUser);

// router.get("/plan", createPlan);
// router.get("/exercise", getExerciseByEquip);

//route to update info in db
router.get("/update", updateUser);
router.get("/userplan", getUserPlan);
router.post("/createplan", createPlan);

//test getting gif
router.get("/picture", getPic);

router.post("/register", insertUserDb);
router.post("/login", userLogin);

module.exports = router;
