const { db } = require("../connections/local-heroku-db");

// const _writeTest = (
//   first_name,
//   last_name,
//   email,
//   password,
//   birthdate,
//   weight,
//   height,
//   gender
// ) => {
//   return db("fit_user")
//     .select(
//       first_name,
//       last_name,
//       email,
//       password,
//       birthdate,
//       weight,
//       height,
//       gender
//     )
//     .returning("*");
// };

// const _readTest = (first_name) => {
//   return db("fit_user").select(first_name).where({ first_name: first_name });
// };

const _test1 = (first_name) => {
  return db
    .select("first_name", "last_name")
    .from("fit_user")
    .where({ first_name: first_name });
};

const getData = (table, property, where) => {
  return db(table).select(property).where(where);
};

const insertData = (table, inputData) => {
  return db(table).insert(inputData).returning("*");
};

const updateData = (table, newData, id) => {
  return db(table).update(newData).where(id).returning("*");
};

module.exports = { _test1, getData, insertData, updateData };
