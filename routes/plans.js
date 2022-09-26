const express = require("express");
const {
  createPlan,
  getUserPlan,
  insertUserDb,
  userLogin,
  numberPlans,
} = require("../controllers/plans");
const router = express.Router();

router.post("/userplan", getUserPlan);
router.post("/createplan", createPlan);
router.post("/register", insertUserDb);
router.post("/login", userLogin);
router.post("/number_plans", numberPlans);

module.exports = router;
