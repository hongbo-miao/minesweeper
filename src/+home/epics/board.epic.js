import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import * as actions from '../actions';
import * as types from '../types/';

export const selectSquareEpic1 = (action$, store) =>
  action$
    .ofType(types.SELECT_SQUARE)
    .filter(action => action.payload.hadDead)
    .map(() => actions.die());

export const selectSquareEpic2 = (action$, store) =>
  action$
    .ofType(types.SELECT_SQUARE)
    .filter(action => action.payload.hasWon)
    .map(() => actions.win());

export const selectSquareEpic3 = (action$, store) =>
  action$
    .ofType(types.SELECT_SQUARE)
    .filter(() => store.getState().settings.playerNumber > 1)
    .filter(action => !action.payload.isRightClick)
    .filter(action => !action.payload.hadDead)
    .filter(action => !action.payload.hasWon)
    .map(() => actions.nextPlayer());
