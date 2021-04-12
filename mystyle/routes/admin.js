const express = require("express"),
  router = express.Router(),
  admin = require("../controllers/admin");

router.route("/admin").get(admin.admin);

module.exports = router;
