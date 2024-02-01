export const options = { indent_size: 2, space_in_empty_paren: true };
export const simplePollCode = `function poll() {
        fetch("/polling-url")
        .then(response => response.json())
        .then(data => {
            console.log(data); // 处理服务器响应的数据
            setTimeout(poll, 3000); // 3秒后再次发起轮询
        });
    }
    poll();`;

export const simplePollFrontDemo = `
import React, { useEffect, useRef, useState } from "react";

export const SimplePoll: React.FC = () => {
const timer = useRef<NodeJS.Timeout | undefined>();
const [time, setTime] = useState<string | null>(null);

const poll = () => {
    // 在开始新的轮询前清除定时器以防止重复
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
    getNowTime()
      .then((response) => response.json())
      .then(({ data }) => {
        const { time } = data;
        setTime(time);
      })
      .finally(() => {
        // 启动下一个轮询
        timer.current = setTimeout(poll, 300);
      });
  };
  
  useEffect(() => {
    poll();
    // 组件卸载时，清除定时器, 停止轮询
    return () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = undefined;
    };
  }, []);
  
  return <h3>{time}</h3>;
};`;

export const simplePollBackDemo = `
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

module.exports = { getNowTime };`;
