import * as types from '../types/';
import { store } from '../../';

export const nextPlayer = () => ({ type: types.NEXT_PLAYER, payload: { playerNumber: store.getState().settings.playerNumber } });
