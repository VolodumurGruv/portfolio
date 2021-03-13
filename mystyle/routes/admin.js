const express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  admin = require("../controllers/admin");

router.route("/").get(admin.start);

router
  .route("/login")
  .get(admin.loginRend)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/admin/login",
    }),
    admin.login
  );

module.exports = router;
