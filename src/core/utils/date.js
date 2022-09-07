export const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

export const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month.toString().padStart(2, '0');
  // if (month < 10) {
  //   return `0${month}`;
  // } else {
  //   return month;
  // }
};
