import * as types from '../types/';
import { store } from '../../';

export const changeWidth = ({ width }) => ({
  type: types.CHANGE_WIDTH,
  payload: {
    width,
    height: store.getState().settings.height
  }
});

export const changeHeight = ({ height }) => ({
  type: types.CHANGE_HEIGHT,
  payload: {
    width: store.getState().settings.width,
    height
  }
});

export const changePlayerNumber = ({ playerNumber }) => ({ type: types.CHANGE_PLAYER_NUMBER, payload: { playerNumber } });
