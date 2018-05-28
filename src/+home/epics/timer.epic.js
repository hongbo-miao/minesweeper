import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';

import * as actions from '../actions';
import * as types from '../types/';

export const startCountDownEpic = (action$, store) =>
  action$
    .ofType(
      types.START_COUNT_DOWN,
      types.RESET_GAME
    )
    .mergeMap(() =>
      Observable
        .interval(1000)
        .filter(() => store.getState().timer > 0)
        .map(actions.countDown)
        .takeUntil(action$.ofType(
          types.DIE,
          types.WIN,
          types.RESET_GAME
        ))
    );

export const countDownEpic = (action$, store) =>
  action$
    .ofType(types.COUNT_DOWN)
    .filter(() => store.getState().timer <= 0)
    .map(() => actions.die());
