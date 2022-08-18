// const { _readTest } = require("../modules/plansInput");
const {
  _test1,
  getData,
  insertData,
  updateData,
} = require("../modules/plansInput");

// const readTest = async (req, res) => {
//   try {
//     let result = await _readTest(req.body);
//     res.send("data inserted");
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ msg: "I failed" });
//   }
// };

// const writeUser = async (req, res) => {
//   try {
//     let result = await insertUser("test", {
//       username: "Shlomo",
//       email: "shlomo@gmail.com",
//     });
//     console.log(result);
//     res.send("success");
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ msg: "I failed" });
//   }
// };

const test1 = async (req, res) => {
  try {
    let result = await getData("fit_user", "*", { first_name: "mika" });
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

const writeUser = async (req, res) => {
  try {
    let result = await insertData("fit_user", {
      first_name: "Ehud",
      last_name: "Miron",
      email: "sfdf@ggdfg.co.il",
      password: 1234,
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

module.exports = { test1, writeUser, updateUser };
