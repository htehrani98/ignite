import { getCurrentDay, getCurrentMonth } from './core/utils/date';
// for example upComingGamesURL = https://api.rawg.io/api/games?dates=2022-08-21,2023-08-21&ordering=-added&page_size=16&key=0150979fafd046608086dec5c755559e

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const createGameEndpoint = url => {
  return `https://api.rawg.io/api/games${url}key=0150979fafd046608086dec5c755559e`;
};

export const popularGamesURL = () =>
  createGameEndpoint(`?dates=${lastYear},${currentDate}&ordering=-rating&page_size=16&`);

export const upComingGamesURL = () =>
  createGameEndpoint(`?dates=${currentDate},${nextYear}&ordering=-added&page_size=16&`);

export const newGamesURL = () =>
  createGameEndpoint(
    `?dates=${lastYear},${currentDate}&ordering=-released&page_size=16&`,
  );

export const gameDetailsURL = gameId => createGameEndpoint(`/${gameId}?`);

export const gameScreenshotURL = gameId => createGameEndpoint(`/${gameId}/screenshots?`);

export const searchGameURL = gameName =>
  createGameEndpoint(`?search=${gameName}&page_size=12&`);
