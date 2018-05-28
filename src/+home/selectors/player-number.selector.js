import { createSelector } from 'reselect';

const getSettings = state => state.settings;

export const getPlayerNumber = createSelector(
  [getSettings],
  (settings) => settings.playerNumber
);
