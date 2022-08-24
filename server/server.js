const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("../server/routes/plans");
const bp = require("body-parser");
// const fs = require("fs");

dotenv.config({ path: "C:/GitHub/final_project/server/.env" });

//starting the process
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port ${process.env.PORT || 8080}`);
});

app.use("/", router);

app.use(bp.urlencoded({ extended: false }));

// createPlan();
