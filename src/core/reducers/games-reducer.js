const initState = {
  popular: [],
  newGames: [],
  upComing: [],
};

export const gamesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
