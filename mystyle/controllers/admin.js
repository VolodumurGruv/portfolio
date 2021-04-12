const catchAsync = require("../utils/catchAsync"),
  msgSchema = require("../models/message");

module.exports.admin = catchAsync(async (req, res, next) => {
  try {
    const msgs = await msgSchema.find();
    console.log(msgs);
    if (msgs.length) {
      res.render("admin", { msgs });
    }
    res.send("No messages");
    res.render("admin");
  } catch (e) {
    console.log(e);
  }
});
