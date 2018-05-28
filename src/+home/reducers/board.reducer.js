import * as types from '../types/';
import { generateSweepBoard } from '../lib/';
import { Configs } from '../../configs';

export default function (state = generateSweepBoard({ width: Configs.defaultWidth, height: Configs.defaultHeight }), action) {
  switch (action.type) {
    case types.RESET_GAME:
    case types.CHANGE_WIDTH:
    case types.CHANGE_HEIGHT: {
      const { width, height } = action.payload;
      return generateSweepBoard({ width, height });
    }

    case types.SELECT_SQUARE: {
      const { newBoard } = action.payload;
      return newBoard;
    }

    default: {
      return state;
    }
  }
}
