const msgSchema = require("../models/message");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/error");
const setData = require("../utils/date");

module.exports.index = (req, res) => {
  res.render("index");
};

module.exports.ability = (req, res) => {
  res.render("portfolio/ability");
};

module.exports.exampels = (req, res) => {
  res.render("portfolio/exampels");
};

module.exports.contact = catchAsync(async (req, res, next) => {
  const msgs = (await msgSchema.find()).reverse();
  // msgs.reverse();
  res.render("portfolio/contact", { msgs });
});

module.exports.popup = (req, res) => {
  res.render("portfolio/popup");
};

module.exports.message = catchAsync(async (req, res, next) => {
  const { userName, message } = req.body;
  // if (!userName && !message) throw new AppError("Invalid data", 400);
  const date = setData();
  const msg = new msgSchema({
    userName,
    message,
    date,
  });
  await msg.save();
  req.flash("success", "Message was created");
  res.redirect("/contact");
});
