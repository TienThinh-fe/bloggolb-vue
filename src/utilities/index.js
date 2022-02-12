export function getDate() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();

  const dayString = day < 10 ? "0" + day : day;
  const monthString = month < 10 ? "0" + month : month;
  const hourString = hour < 10 ? "0" + hour : hour;
  const minuteString = minute < 10 ? "0" + minute : minute;

  const newDate =
    `${hourString}:${minuteString} - ` +
    dayString +
    "/" +
    monthString +
    "/" +
    year;

  return newDate;
}

export function getId() {
  return "blog_" + Math.random().toString(16).slice(2);
}
