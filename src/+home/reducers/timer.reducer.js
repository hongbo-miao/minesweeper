import * as types from '../types/';
import { Configs } from '../../configs';

const initialState = Configs.countdown;

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_WIDTH:
    case types.CHANGE_HEIGHT: {
      return initialState;
    }

    case types.SELECT_SQUARE: {
      const { isRightClick } = action.payload;
      return isRightClick ? state : initialState;
    }

    case types.COUNT_DOWN: {
      return state - 1;
    }

    default: {
      return state;
    }
  }
}
