import { combineReducers } from "redux";

import { gamesReducer } from "./games-reducer";

const initState = {
  name: "",
  isLogged: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
});
