var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/name", function (req, res, next) {
  res.send("james");
});

router.get("/foobar", function (req, res, next) {
  res.send("foobar");
});

module.exports = router;
