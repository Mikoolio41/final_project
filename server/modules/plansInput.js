const { db } = require("../connections/local-heroku-db");

//generic functions for getting info from db
const getData = (table, property, where) => {
  return db(table).select(property).where(where);
};

const getDataEquip = (table, property, where, where2) => {
  return db(table).select(property).where(where).orWhere(where2);
};

const getLimitedData = (table, property, where) => {
  return db(table).select(property).where(where).limit(10);
};

const insertData = (table, inputData) => {
  return db(table).insert(inputData).returning("*");
};

const updateData = (table, newData, id) => {
  return db(table).update(newData).where(id).returning("*");
};

module.exports = {
  getData,
  insertData,
  updateData,
  getLimitedData,
  getDataEquip,
};
