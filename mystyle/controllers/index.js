const Msg = require("../models/message");

module.exports.index = (req, res) => {
  res.render("index");
};

module.exports.ability = (req, res) => {
  res.render("portfolio/ability");
};

module.exports.exampels = (req, res) => {
  res.render("portfolio/exampels");
};

module.exports.contact = async (req, res) => {
  const msgs = await Msg.find();
  res.render("portfolio/contact", { msgs });
};

module.exports.popup = (req, res) => {
  res.render("portfolio/popup");
};

module.exports.message = async (req, res) => {
  const { userName, message } = req.body;

  const msg = new Msg({
    userName,
    message,
    date: new Date(),
  });
  await msg.save();

  res.redirect("/contact");
};
