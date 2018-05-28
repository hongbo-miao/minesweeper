import * as types from '../types/';
import { store } from '../../';

export const resetGame = () => ({
  type: types.RESET_GAME,
  payload: {
    width: store.getState().settings.width,
    height: store.getState().settings.height
  }
});
