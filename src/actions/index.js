// @flow

import { HIDE_LIVE_GAME, SHOW_LIVE_GAME } from './actionTypes';

export const showLiveGame = () => {
  return function action(dispatch) {
    dispatch({ type: SHOW_LIVE_GAME });
  };
};

export const hideLiveGame = () => {
  return function action(dispatch) {
    dispatch({ type: HIDE_LIVE_GAME });
  };
};
