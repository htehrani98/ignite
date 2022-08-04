const base_url =
  "https://api.rawg.io/api/platforms?key=25d2f03a14bb4f56a5977019da5ea2ec/";
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
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}-`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}-`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}-`;

const popular_games = `games?dates=${lastYear},${currentDay}&ordering=-rating&page_size=16`;
const popularGamesURL = () => `${base_url}${popular_games}`;
console.log(popularGamesURL());
