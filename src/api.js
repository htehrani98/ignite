const base_url = "https://api.rawg.io/api";

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month.toString().padStart(2, "0");
  // if (month < 10) {
  //   return `0${month}`;
  // } else {
  //   return month;
  // }
};

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}-`;

const popular_games = `/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=16`;
const api_key = "&key=0150979fafd046608086dec5c755559e";

export const popularGamesURL = () => {
  console.log(`${base_url}${popular_games}${api_key}`);
  return `${base_url}${popular_games}${api_key}`;
};

// const url = 'api.example.com/user?max_age=15&sort=asc'

// `
// [
//   {"name": "hamid", "age": 22},
//   {"name": "hamid", "age": 10},
//   {"name": "hamid", "age": 22},
//   {"name": "hamid", "age": 15},
//   {"name": "hamid", "age": 22},
//   {"name": "hamid", "age": 22},
//   {"name": "hamid", "age": 22},
// ]
// `
