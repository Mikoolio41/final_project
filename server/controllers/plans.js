const axios = require("axios");
const { insertData } = require("../modules/plansInput");

let plan;

// function to get the exercise by equipment data from the API
const exerciseByEquip = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/equipment/cable",
    headers: {
      "X-RapidAPI-Key": "743686ac41mshcbc2d35375e7615p134460jsn104c0b2bc83e",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  let response = await axios.request(options);
  plan = response.data;
};

//select 2 exercises from retreived data
const createPlan = async () => {
  await exerciseByEquip();
  const filterEx = plan.filter((item) => {
    return item.bodyPart == "back";
  });
  let firstIndex = Math.floor(Math.random() * filterEx.length);
  let secondIndex = Math.floor(Math.random() * filterEx.length);
  if (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * filterEx.length);
  }
  const newArray = filterEx.splice(0, 2, firstIndex, secondIndex);
  const obj = newArray.forEach((item) => [{ userid: 1, exid: item.id }]);
  // const result = insertData("userplan", obj);
  console.log(firstIndex, secondIndex);
  console.log(obj);
  // return result;
};

// createPlan();

//retreive exercise by id data from api
const exerciseById = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/exercise/0022",
    headers: {
      "X-RapidAPI-Key": "743686ac41mshcbc2d35375e7615p134460jsn104c0b2bc83e",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  let response = await axios.request(options);
  console.log(response.data);
};

// exerciseById();

module.exports = { createPlan, exerciseById };
