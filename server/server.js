const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv");
const router = require("../server/routes/plans");
const bp = require("body-parser");

// const { _readTest } = require("../server/modules/plansInput");
// const { readTest } = require("../server/controllers/plans");
// const db = require("../server/connections/local-heroku-db");

dotenv.config({ path: "C:/GitHub/final_project/server/.env" });

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port ${process.env.PORT || 8080}`);
});

app.use("/db", router);

// const retest = () => {
//   console.log(db.column("first_name", "last_name").select().from("fit_user"));
// };

// retest;

// console.log(retest("mika"));

// const _writeTest = (first_name) => {
//   return db("fit_user").insert(first_name).returning("*");
// };

// _writeTest(
//   "mika",
//   "bibas",
//   "mikabibas@gmail.com",
//   "1234",
//   "23-04-1989",
//   60,
//   160,
//   1
// );

// readTest("mika");
// console.log(readTest("mika"));

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

let planData = [];

app.get("/api/ex", async (req, res) => {
  let plan = await retrieveInfo();
  planData = plan.data;
  console.log(planData);
  res.send(plan.data[0]);
});

// function to get the data from the API
let retrieveInfo = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
      "X-RapidAPI-Key": "743686ac41mshcbc2d35375e7615p134460jsn104c0b2bc83e",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  let response = await axios.request(options);
  return response;
};
