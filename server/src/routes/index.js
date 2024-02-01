const express = require("express");
const simplePollRoute = require("./simplePollRoute");
const longPollRoute = require("./longPollRoute");
const router = express.Router();

router.use("/simplePoll", simplePollRoute);
router.use("/longPoll", longPollRoute);

module.exports = router;
