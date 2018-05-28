import { combineEpics } from 'redux-observable';

import {
  countDownEpic,
  selectSquareEpic1,
  selectSquareEpic2,
  selectSquareEpic3,
  startCountDownEpic
} from './+home/epics/';

export default combineEpics(
  countDownEpic,
  selectSquareEpic1,
  selectSquareEpic2,
  selectSquareEpic3,
  startCountDownEpic
);
