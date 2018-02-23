
import { SAY_HELLO, FETCHING_LUKE, FETCHED_LUKE } from '../actions';

const initialState = {
  text: '',
  luke: {},
  fetchingLuke: false
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LUKE:
      return { ...state, fetchingLuke: true };

    case FETCHED_LUKE:
      return { ...state, luke: action.payload, fetchingLuke: false };

    case SAY_HELLO:
      return { ...state, text: action.payload };

    default:
      return state;
  }
};