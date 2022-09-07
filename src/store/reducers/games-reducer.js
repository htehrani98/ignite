import * as storeKeys from '../../core/constants/store-keys.js';

const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};
//at line 11 how can find action
export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case storeKeys.FETCH_GAMES:
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upComing,
        newGames: action.payload.newGames,
      };
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
      };
    case 'CLEAR_SEARCHED':
      return {
        ...state,
        searched: [],
      };
    // "CLEAR_SEARCHED" only used for click on ignite icon or text
    default:
      return { ...state };
  }
};
