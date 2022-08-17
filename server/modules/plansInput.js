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

module.exports = { _test1 };
