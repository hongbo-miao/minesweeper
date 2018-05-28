import * as types from '../types/';
import { generateMineBoard } from '../lib/';
import { Configs } from '../../configs';

export default function (state = generateMineBoard({ width: Configs.defaultWidth, height: Configs.defaultHeight }), action) {
  switch (action.type) {
    case types.RESET_GAME:
    case types.CHANGE_WIDTH:
    case types.CHANGE_HEIGHT: {
      const { width, height } = action.payload;
      return generateMineBoard({ width, height });
    }

    default: {
      return state;
    }
  }
}
