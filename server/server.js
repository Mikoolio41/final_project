const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("../server/routes/plans");
const bp = require("body-parser");
const { auth } = require("express-openid-connect");
const { createPlan, exerciseById } = require("../server/controllers/plans");
// const fs = require("fs");
// const path = require("path");
// const axios = require("axios");

dotenv.config({ path: "C:/GitHub/final_project/server/.env" });

//auth0 required parameters
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:5004",
  clientID: "YTON4ec1si9zLcf0RPWk26TH2URVFf3Y",
  issuerBaseURL: "https://dev-qty-2pbd.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

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

// const createPlan = async () => {
//   await exerciseByEquip();
//   const filterEx = plan.filter((item) => {
//     return item.bodyPart == "back";
//   });
//   let firstIndex = Math.floor(Math.random() * filterEx.length);
//   let secondIndex = Math.floor(Math.random() * filterEx.length);
//   if (firstIndex === secondIndex) {
//     secondIndex = Math.floor(Math.random() * filterEx.length);
//   }
//   const newArray = filterEx.splice(0, 2, firstIndex, secondIndex);
//   // console.log(firstIndex, secondIndex);
//   // console.log(newArray);
// };

// createPlan();

// const exerciseById = async () => {
//   const options = {
//     method: "GET",
//     url: "https://exercisedb.p.rapidapi.com/exercises/exercise/0022",
//     headers: {
//       "X-RapidAPI-Key": "743686ac41mshcbc2d35375e7615p134460jsn104c0b2bc83e",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };
//   let response = await axios.request(options);
//   console.log(response.data);
// };

// exerciseById();
