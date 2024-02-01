export const getNowTime = () => {
  return fetch("http://localhost:3000/api/simplePoll/getNowTime");
};

export const getLongNowTime = () => {
  return fetch("http://localhost:3000/api/longPoll/getLongNowTime");
};
