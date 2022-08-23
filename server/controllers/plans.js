const { insertData, updateData, getData } = require("../modules/plansInput");

let plan;

//fetching data from db with parameters
const readUser = async (req, res) => {
  try {
    let result = await getData("fit_user", "*", { weight: "60" });
    // console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

//writing info to db with parameters
const writeUser = async (req, res) => {
  try {
    let result = await insertData("fit_user", {
      birthdate: "1989-05-12",
      weight: 45,
      height: 170,
      gender: 2,
    });
    console.log(result);
    res.send("added info");
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

//updating info in db with parameters
const updateUser = async (req, res) => {
  try {
    let result = await updateData(
      "test",
      { email: "ehud123@gmail.com" },
      { username: "Ehud" }
    );
    console.log(result);
    res.send("info updated");
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

const getPic = async (req, res) => {
  try {
    let result = await getData("exercises", "*", { id: "1255" });
    console.log(JSON.stringify(result[0].gifurl));
    res.send(JSON.stringify(result[0].gifurl));
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

// function to get the exercise by equipment data from the DB
const getExerciseByEquip = async (req, res) => {
  try {
    let result = await getData("exercises", "*", { equipment: "dumbbell" });
    // console.log(result);
    plan = result;
    res.send(result);
    console.log(plan);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
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
  await getExerciseByEquip();
  for (let i = 0; i < bodyPartsArr.length; i++) {
    const filterEx = plan.filter((item) => {
      return item.bodyPart == bodyPartsArr[i];
    });
    let firstIndex = Math.floor(Math.random() * filterEx.length);
    let secondIndex = Math.floor(Math.random() * filterEx.length);
    if (firstIndex === secondIndex) {
      secondIndex = Math.floor(Math.random() * filterEx.length);
    }
    // console.log(firstIndex, secondIndex);
    const userPlan = [
      { userid: 1, exid: filterEx[firstIndex].id },
      { userid: 1, exid: filterEx[secondIndex].id },
    ];
    console.log(userPlan);
    // console.log(firstIndex, secondIndex);
    const result = await insertData("userplan", userPlan);
    console.log(result);
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
  // ]);
};

//retreive exercise by id data from DB

const exerciseById = async () => {
  try {
    let result = await getData("exercises", "*", { id: "203" });
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

module.exports = {
  createPlan,
  exerciseById,
  readUser,
  writeUser,
  getPic,
  updateUser,
  getExerciseByEquip,
};
