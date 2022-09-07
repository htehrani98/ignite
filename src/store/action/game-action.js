import axios from 'axios';

import { popularGamesURL, upComingGamesURL, newGamesURL, searchGameURL } from '../../api';
import * as storeKeys from '../../core/constants/store-keys.js';

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesURL());
  const upComingData = await axios.get(upComingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: storeKeys.FETCH_GAMES,
    payload: {
      popular: popularData.data.results,
      upComing: upComingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = game_name => async dispatch => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results,
    },
  });
};
