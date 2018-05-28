import * as types from '../types/';

export default function (state = 1, action) {
  switch (action.type) {
    case types.NEXT_PLAYER: {
      const { playerNumber } = action.payload;
      return state % playerNumber + 1;
    }

    default: {
      return state;
    }
  }
}
