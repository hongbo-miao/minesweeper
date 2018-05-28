import * as types from '../types/';

import { GameStatusEnum } from '../fixtures/';

export default function (state = GameStatusEnum.gaming, action) {
  switch (action.type) {
    case types.DIE: {
      return GameStatusEnum.dead;
    }

    case types.WIN: {
      return GameStatusEnum.won;
    }

    default: {
      return state;
    }
  }
}
