const initialState = {
  game: { platforms: [] },
  screen: { result: [] },
  isLoading: true,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

{
  /* #LOAD_ISSUE */
  /*
const initialState = {
  game: {},
  screen: [],
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};
 */
}
