const express = require("express");
const {
  createPlan,
  getUserPlan,
  insertUserDb,
  userLogin,
  userTarget,
  readTarget,
} = require("../controllers/plans");
const router = express.Router();

router.post("/userplan", getUserPlan);
router.post("/createplan", createPlan);
router.post("/user_target", userTarget);
router.post("/number_target", readTarget);
router.post("/register", insertUserDb);
router.post("/login", userLogin);

module.exports = router;
