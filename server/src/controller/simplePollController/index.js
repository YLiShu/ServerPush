const moment = require("moment");

moment.locale("zh-cn");

const getNowTime = (req, res) => {
  const time = moment().format("YYYY年MM月DD日hh点mm分ss秒");
  res.json({
    code: "200",
    msg: "success",
    data: {
      time,
    },
  });
};

module.exports = { getNowTime };
