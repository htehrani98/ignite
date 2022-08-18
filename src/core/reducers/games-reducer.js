const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};
//at line 11 how can find action
export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upComing,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};
