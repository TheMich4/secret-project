// @flow

import { HIDE_LIVE_GAME, SHOW_LIVE_GAME } from '../actions/actionTypes';

const initialState = {
  isLiveGameVisible: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LIVE_GAME:
      return {
        ...state,
        isLiveGameVisible: true,
      };

    case HIDE_LIVE_GAME:
      return {
        ...state,
        isLiveGameVisible: false,
      };

    default:
      return state;
  }
}

export default rootReducer;
