const express = require("express");
const app = express();
const axios = require("axios");

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.get("/api/ex", async (req, res) => {
  let plan = await retrieveInfo();
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
