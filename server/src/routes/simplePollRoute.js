const express = require("express");
const { getNowTime } = require("../controller/simplePollController");

const router = express.Router();

router.get("/getNowTime", getNowTime);

module.exports = router;
