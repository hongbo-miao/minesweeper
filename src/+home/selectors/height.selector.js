import { createSelector } from 'reselect';

const getSettings = state => state.settings;

export const getHeight = createSelector(
  [getSettings],
  (settings) => settings.height
);
