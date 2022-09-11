const {
  insertData,
  updateData,
  getData,
  getLimitedData,
  getDataEquip,
  getJoinData,
} = require("../modules/plansInput");

// let plan;

//fetching data from db with parameters
const readUser = async (req, res) => {
  try {
    let result = await getData("fit_user", "*", { weight: "60" });
    console.log(result);
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
// const getExerciseByEquip = async (req, res) => {
//   console.log(req.body);
//   try {
//     let result = await getDataEquip("exercises", "*", ("equipment", req.body));
//     // console.log(result);
//     plan = result;
//     console.log(plan);
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ msg: "bummer" });
//   }
// };

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
const createPlan = async (req, res) => {
  console.log(req.body);
  try {
    let plan = await getDataEquip(
      "exercises",
      "*",
      "equipment",
      req.body.equipment
    );
    console.log(plan);
    for (let i = 0; i < bodyPartsArr.length; i++) {
      const filterEx = plan.filter((item) => {
        return item.bodypart == bodyPartsArr[i];
      });
      let firstIndex = Math.floor(Math.random() * filterEx.length);
      let secondIndex = Math.floor(Math.random() * filterEx.length);
      if (firstIndex === secondIndex) {
        secondIndex = Math.floor(Math.random() * filterEx.length);
      }
      console.log(firstIndex, secondIndex);
      const userPlan = [
        {
          userid: req.body.userid,
          exid: filterEx[firstIndex].id,
        },
        {
          userid: req.body.userid,
          exid: filterEx[secondIndex].id,
        },
      ];
      console.log(userPlan);
      const result = await insertData("userplan", userPlan);
      console.log(result.length);
    }
    res.send("yay");
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "bummer" });
  }
};

const getUserPlan = async (req, res) => {
  try {
    let result = await getJoinData(
      "userplan",
      "exercises",
      "user_target",
      "userplan.exid",
      "exercises.exid",
      "user_target.user_id",
      "userplan.userid",
      { userid: req.body.userid }
    );
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "couldnt make it" });
  }
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

const insertUserDb = async (req, res) => {
  console.log(await req.body);
  try {
    let checkUserExist = await getData("fit_user", ["id", "email"], {
      email: req.body.email,
    });
    console.log(checkUserExist);
    if (checkUserExist.length === 0) {
      let result = await insertData("fit_user", req.body);
      console.log(result);
      res.send(result);
    } else {
      res.send({ msg: "user already exists, please log in" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "could not insert user" });
  }
};

const userLogin = async (req, res) => {
  console.log(await req.body);
  try {
    let result = await getData(
      "fit_user",
      ["id", "first_name", "email", "password"],
      {
        email: req.body.email,
      }
    );
    console.log(result);
    if (result.length == 0) {
      res.send("you're not registered");
    } else if (result.length > 0 && result[0].password === req.body.password) {
      res.send({ first_name: result[0].first_name, userid: result[0].id });
    } else {
      res.send("password not correct");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "could not read user" });
  }
};

const userTarget = async (req, res) => {
  try {
    let result = await insertData("user_target", req.body);
    console.log(result);
    res.send("target inserted");
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "could not insert target" });
  }
};

module.exports = {
  createPlan,
  exerciseById,
  readUser,
  writeUser,
  getPic,
  updateUser,
  getUserPlan,
  insertUserDb,
  userLogin,
  userTarget,
};
