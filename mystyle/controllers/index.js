module.exports.index = (req, res) => {
  res.render("index");
};

module.exports.contact = (req, res) => {
  res.render(contact);
};

module.exports.popup = (req, res) => {
  res.render(popup);
};
