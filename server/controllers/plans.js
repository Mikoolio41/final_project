const { _writeTest } = require("../modules/plansInput");

const writeTest = async (req, res) => {
  try {
    let result = await _writeTest("mika");
    res.send("data inserted");
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "I failed" });
  }
};

module.exports = { writeTest };
