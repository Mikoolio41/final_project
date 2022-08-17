// const { _readTest } = require("../modules/plansInput");
const { _test1 } = require("../modules/plansInput");

// const readTest = async (req, res) => {
//   try {
//     let result = await _readTest(req.body);
//     res.send("data inserted");
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ msg: "I failed" });
//   }
// };

const test1 = async (req, res) => {
  try {
    let result = await _test1("mika");
    res.send("data inserted");
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

module.exports = { test1 };
