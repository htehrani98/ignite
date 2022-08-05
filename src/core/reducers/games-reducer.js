const initState = {
  popular: [],
  newGames: [],
  upComing: [],
};
// it errors when use = instead of :
// but not for ed

export const gamesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
