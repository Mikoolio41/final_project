const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("../server/routes/plans");
const bp = require("body-parser");
const { createPlan, exerciseById } = require("../server/controllers/plans");
// const fs = require("fs");
// const path = require("path");
// const axios = require("axios");

dotenv.config({ path: "C:/GitHub/final_project/server/.env" });

//starting the process
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port ${process.env.PORT || 8080}`);
});

app.use("/", router);

app.use(bp.urlencoded({ extended: false }));

// createPlan();
// exerciseById();
// let plan;

// // function to get the data from the API
// const exerciseByEquip = async () => {
//   const options = {
//     method: "GET",
//     url: "https://exercisedb.p.rapidapi.com/exercises/equipment/cable",
//     headers: {
//       "X-RapidAPI-Key": "743686ac41mshcbc2d35375e7615p134460jsn104c0b2bc83e",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };
//   let response = await axios.request(options);
//   plan = response.data;
// };
