const express = require("express");
const { getLongNowTime } = require("../controller/longPollController");

const router = express.Router();

router.get("/getLongNowTime", getLongNowTime);

module.exports = router;
