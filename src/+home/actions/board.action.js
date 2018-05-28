import * as types from '../types/';
import { store } from '../../';
import { getEntities } from '../fixtures/';

export const selectSquare = ({ x, y, isRightClick }) => ({
  type: types.SELECT_SQUARE,
  payload: {
    x,
    y,
    isRightClick,
    ...getEntities({ x, y, isRightClick, board: store.getState().board, mineMap: store.getState().mineMap })
  }
});
