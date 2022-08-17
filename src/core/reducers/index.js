import { combineReducers } from "redux";

import { gamesReducer } from "./games-reducer";

export const rootReducer = combineReducers({
  games: gamesReducer,
});
