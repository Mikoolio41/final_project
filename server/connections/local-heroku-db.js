const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config({ path: "C:/GitHub/final_project/server/.env" });

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    url: process.env.DB_URL,
    ssl: { rejectUnauthorized: false },
  },
});

// db.raw("SELECT 1")
//   .then(() => {
//     console.log("PostgreSQL connected");
//   })
//   .catch((e) => {
//     console.log("PostgreSQL not connected");
//     console.error(e);
//   });

module.exports = { db };
