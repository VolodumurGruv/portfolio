const express = require("express"),
  router = express.Router(),
  { index } = require("../controllers/index");

router.route("/").get(index);

module.exports = router;
