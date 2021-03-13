const Admin = require("../models/admin");

module.exports.start = (req, res) => {
  res.render("admin/admin");
};

// module.exports.create = async (req, res) => {
//   try {
//     const { email, username, password } = req.body;
//     const admin = new Admin({ email, username });
//     const newAdmin = await Admin.register(admin, password);
//     req.flash("success", "Welcome!");
//     res.redirect("/admin");
//   } catch (e) {
//     req.flash("error", e.message);
//     res.redirect("/admin");
//   }
// };

module.exports.loginRend = (req, res) => {
  res.render("admin/login");
};

module.exports.login = (req, res) => {
  console.log(req.body);
  req.flash("success", "welcome back!");
  res.redirect("/admin");
};
