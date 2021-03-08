const express = require("express"),
  router = express.Router(),
  portfolio = require("../controllers/index"),
  validate = require("../middlewares/validation");

router.route("/").get(portfolio.index);

// router.route("/about").get(portfolio.about);

router.route("/ability").get(portfolio.ability);

router.route("/exampels").get(portfolio.exampels);

router.route("/contact").get(portfolio.contact);

router.route("/contact/popup").get(portfolio.popup);
router.route("/contact/popup").post(validate, portfolio.message);

module.exports = router;
