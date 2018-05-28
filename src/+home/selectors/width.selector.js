import { createSelector } from 'reselect';

const getSettings = state => state.settings;

export const getWidth = createSelector(
  [getSettings],
  (settings) => settings.width
);
