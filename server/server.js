const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("../server/routes/plans");
const bp = require("body-parser");
// const fs = require("fs");

dotenv.config({ path: "C:/GitHub/final_project/server/.env" });

//starting the process
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port ${process.env.PORT || 8080}`);
});

app.use("/", router);

app.use(bp.urlencoded({ extended: false }));

// createPlan();

// document.forms[0].addEventListener("submit", async (e) => {
//   e.preventDefault();
//   questionData = document.querySelector("#questionText").value;
//   questionData =
//     questionData.substring(0, 1).toLowerCase() + questionData.substring(1);
//   console.log(questionData);
//   if (questionData.search("wh") !== 0 && questionData.search("how") !== 0) {
//     alert(
//       "please submit a WH question (who, why, what, where, when or how)..."
//     );
//   } else {
//     if (questionData.endsWith("?")) {
//       console.log("it is ok");
//     } else {
//       questionData = questionData.concat("", "?");
//     }
//     const response = await fetch("/api/phrases", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: `{ "question": "${questionData}" }`,
//     });
//     deleteInfo("#answerText");
//     let text = await response.text();
//     if (text.charAt(text.length - 1) == "9") {
//       found = true;
//       text = text.slice(0, text.length - 1);
//     } else {
//       found = false;
//     }
//     appendInfo("#answerText", text);

//     document.querySelector(".rate").style.visibility = "visible";
//     document.querySelector("#star-5").addEventListener("click", rating);
//   }
// });
