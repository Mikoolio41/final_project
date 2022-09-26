const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/plans");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "C:/GitHub/final_project/.env" });

//starting the process
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port ${process.env.PORT || 8080}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);
