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
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=16`;
const upComing_Games = `/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=16`;
const newGames = `/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=16`;
const api_key = "key=0150979fafd046608086dec5c755559e";

export const popularGamesURL = () => `${base_url}${popular_games}&${api_key}`;
export const upComingGamesURL = () => `${base_url}${upComing_Games}&${api_key}`;
export const newGamesURL = () => `${base_url}${newGames}&${api_key}`;
export const gameDetailsURL = (game_id) =>
  `${base_url}/games/${game_id}?${api_key}`;
// upComingGamesURL = https://api.rawg.io/api/games?dates=2022-08-21,2023-08-21&ordering=-added&page_size=16&key=0150979fafd046608086dec5c755559e
export const gameScreenshotURL = (game_id) =>
  `${base_url}/games/${game_id}/screenshots?${api_key}`;
export const searchGameURL = (game_name) =>
  `${base_url}/games?search=${game_name}&page_size=9&${api_key}`;

// we got 3 type of api:
//  1. restfull api
//  2. (at qaleb xml somthing like html (the mansookh) )
//  3. graphQL

// https://api.rawg.io/docs/#operation/creators_read
