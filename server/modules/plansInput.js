const { db } = require("../connections/local-heroku-db");

//generic functions for getting info from db
const getData = (table, property, where) => {
  return db(table).select(property).where(where);
};

const getDataEquip = (table, property, column, list) => {
  return db(table).select(property).whereIn([column], list);
};

const insertData = (table, inputData) => {
  return db(table).insert(inputData).returning("*");
};

const getJoinData = (
  table1,
  table2,
  table3,
  column1,
  column2,
  column3,
  column4,
  criteria1
  // criteria2
) => {
  return db(table1)
    .join(table2, column1, "=", column2)
    .join(table3, column3, "=", column4)
    .select("*")
    .where(criteria1);
  // .where(criteria2);
};

module.exports = {
  getData,
  insertData,
  getDataEquip,
  getJoinData,
};
