const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/plans");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

dotenv.config({ path: "C:/GitHub/final_project/.env" });

//starting the process
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port ${process.env.PORT || 8080}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", express.static(path.resolve(__dirname, "./client/public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/public", "index.html"));
});

app.use("/", router);
