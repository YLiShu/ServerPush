const moment = require("moment");
moment.locale("zh-cn");

let polls = [];

const getLongNowTime = (req, res) => {
  polls.push(res);

  req.on("close", () => {
    polls = polls.filter((poll) => poll !== res);
  });

  setInterval(() => {
    if (polls.length > 0) {
      const time = moment().format("YYYY年MM月DD日hh点mm分ss秒");
      while (polls.length) {
        const res = polls.pop();
        res.json({
          code: "200",
          msg: "success",
          data: { time },
        });
      }
    }
  }, 1000);
};

module.exports = { getLongNowTime };
