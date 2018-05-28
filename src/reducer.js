import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import * as types from './+home/types';
import boardReducer from './+home/reducers/board.reducer';
import gameStatusReducer from './+home/reducers/game-status.reducer';
import mineMapReducer from './+home/reducers/mine-map.reducer';
import playerReducer from './+home/reducers/player.reducer';
import settingsReducer from './+home/reducers/settings.reducer';
import timerReducer from './+home/reducers/timer.reducer';

const appReducer = combineReducers({
  form: formReducer,
  router: routerReducer,

  gameStatus: gameStatusReducer,
  mineMap: mineMapReducer,
  player: playerReducer,
  settings: settingsReducer,
  board: boardReducer,
  timer: timerReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.RESET_GAME) {
    const {
      form,
      router,

      settings
    } = state;

    return appReducer({
      form,
      router,

      settings
    }, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
