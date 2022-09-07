import { combineReducers } from 'redux';

import { gamesReducer } from './games-reducer';
import { detailReducer } from './detail-reducer';

export const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});
