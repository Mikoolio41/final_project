const { db } = require("../connections/local-heroku-db");

//generic functions for getting info from db
const getData = (table, property, where) => {
  return db(table).select(property).where(where);
};

const getDataEquip = (table, property, column, list) => {
  return db(table).select(property).whereIn([column], list);
};

// const getLimitedData = (table, property, where) => {
//   return db(table).select(property).where(where).limit(10);
// };

const insertData = (table, inputData) => {
  return db(table).insert(inputData).returning("*");
};

// const updateData = (table, newData, id) => {
//   return db(table).update(newData).where(id).returning("*");
// };

const getJoinData = (
  table1,
  table2,
  table3,
  column1,
  column2,
  column3,
  column4,
  where
) => {
  return db(table1)
    .join(table2, column1, "=", column2)
    .join(table3, column3, "=", column4)
    .select("*")
    .where(where);
};

module.exports = {
  getData,
  insertData,
  // updateData,
  // getLimitedData,
  getDataEquip,
  getJoinData,
};
