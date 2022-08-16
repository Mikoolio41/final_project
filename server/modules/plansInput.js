const db = require("../connections/local-heroku-db");

const _writeTest = (first_name) => {
  return db("fit_user").insert(first_name).returning("*");
};

module.exports = { _writeTest };
