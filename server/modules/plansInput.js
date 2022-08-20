const { db } = require("../connections/local-heroku-db");

//generic functions for getting info from db
const getData = (table, property, where) => {
  return db(table).select(property).where(where);
};

const insertData = (table, inputData) => {
  return db(table).insert(inputData).returning("*");
};

const updateData = (table, newData, id) => {
  return db(table).update(newData).where(id).returning("*");
};

//fetching data from db with parameters
const readUser = async (req, res) => {
  try {
    let result = await getData("fit_user", "*", { first_name: "mika" });
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

module.exports = { readUser, writeUser, updateUser, insertData };
