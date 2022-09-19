const {
  insertData,
  getData,
  getDataEquip,
  getJoinData,
  getGroupBy,
} = require("../modules/plansInput");

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
  try {
    let plan = await getDataEquip(
      "exercises",
      "*",
      "equipment",
      req.body.equipment
    );
    for (let i = 0; i < bodyPartsArr.length; i++) {
      const filterEx = plan.filter((item) => {
        return item.bodypart == bodyPartsArr[i];
      });
      let firstIndex = Math.floor(Math.random() * filterEx.length);
      let secondIndex = Math.floor(Math.random() * filterEx.length);
      if (firstIndex === secondIndex) {
        secondIndex = Math.floor(Math.random() * filterEx.length);
      }
      const userPlan = [
        {
          userid: req.body.userid,
          exid: filterEx[firstIndex].id,
          target_id: req.body.target_id,
        },
        {
          userid: req.body.userid,
          exid: filterEx[secondIndex].id,
          target_id: req.body.target_id,
        },
      ];
      const result = await insertData("userplan", userPlan);
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
      "userplan.exid",
      "exercises.exid",
      { userid: req.body.userid },
      { target_id: req.body.target_id }
    );
    res.send(JSON.stringify(result));
    console.log(result.length);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "couldnt make it" });
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
    if (result.length == 0) {
      res.send({ msg: "you're not registered" });
    } else if (result.length > 0 && result[0].password === req.body.password) {
      res.send({ first_name: result[0].first_name, userid: result[0].id });
    } else {
      res.send({ msg: "password not correct" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "could not read user" });
  }
};

const numberPlans = async (req, res) => {
  try {
    let result = await getGroupBy(
      "userplan",
      "target_id",
      {
        userid: req.body.userid,
      },
      "target_id"
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "could not get plans" });
  }
};

module.exports = {
  createPlan,
  getUserPlan,
  insertUserDb,
  userLogin,
  numberPlans,
};
