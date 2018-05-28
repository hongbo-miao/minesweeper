import * as types from '../types/';
import { Configs } from '../../configs';

const initialState = {
  width: Configs.defaultWidth,
  height: Configs.defaultHeight,
  playerNumber: Configs.defaultPlayerNumber
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_WIDTH: {
      const { width } = action.payload;
      return { ...state, width };
    }

    case types.CHANGE_HEIGHT: {
      const { height } = action.payload;
      return { ...state, height };
    }

    case types.CHANGE_PLAYER_NUMBER: {
      const { playerNumber } = action.payload;
      return { ...state, playerNumber };
    }

    default: {
      return state;
    }
  }
}
