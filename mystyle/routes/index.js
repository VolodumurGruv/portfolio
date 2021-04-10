const express = require("express"),
  router = express.Router(),
  portfolio = require("../controllers/index");

router.route("/").get(portfolio.index);

router.route("/contact").get(portfolio.contact);
router.route("/contact/popup").get(portfolio.popup);

module.exports = router;
