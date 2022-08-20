const axios = require("axios");
const { insertData } = require("../modules/plansInput");

let plan;

// function to get the exercise by equipment data from the API
const exerciseByEquip = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/equipment/dumbbell",
    headers: {
      "X-RapidAPI-Key": "743686ac41mshcbc2d35375e7615p134460jsn104c0b2bc83e",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  let response = await axios.request(options);
  plan = response.data;
};

const bodyPartsArr = [
  "cardio",
  "back",
  "chest",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

//select 2 exercises from retreived data
const createPlan = async () => {
  await exerciseByEquip();
  for (let i = 0; i < bodyPartsArr.length; i++) {
    const filterEx = plan.filter((item) => {
      return item.bodyPart == bodyPartsArr[i];
    });
    let firstIndex = Math.floor(Math.random() * filterEx.length);
    let secondIndex = Math.floor(Math.random() * filterEx.length);
    if (firstIndex === secondIndex) {
      secondIndex = Math.floor(Math.random() * filterEx.length);
    }
    // const userPlan = [
    //   { userid: 1, exid: filterEx[firstIndex].id },
    //   { userid: 1, exid: filterEx[secondIndex].id },
    // ];
    // console.log(userPlan);
    console.log(firstIndex, secondIndex);
    // const result = await insertData("userplan", userPlan);
    // console.log(result);
  }
  // const filterEx = plan.filter((item) => {
  //   return item.bodyPart == "chest";
  // });
  // let firstIndex = Math.floor(Math.random() * filterEx.length);
  // let secondIndex = Math.floor(Math.random() * filterEx.length);
  // if (firstIndex === secondIndex) {
  //   secondIndex = Math.floor(Math.random() * filterEx.length);
  // }
  // const userPlan = [
  //   { userid: 1, exid: filterEx[firstIndex].id },
  //   { userid: 1, exid: filterEx[secondIndex].id },
  // ];
  // console.log(userPlan);
  // const result = await insertData("userplan", userPlan);
  // console.log(result);
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
