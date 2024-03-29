const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config({ path: "C:/GitHub/final_project/.env" });

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // url: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
});

module.exports = { db };
