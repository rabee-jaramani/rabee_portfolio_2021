import { combineReducers } from "redux";
import { SET_PODE_ANSWERS } from ".";
import { SET_SEASON } from "./Constants";

export const seasonReducer = (state = "", action) => {
  switch (action.type) {
    case SET_SEASON:
      return action.payload;
    default:
      return state;
  }
};

export const pode_answers_Reducer = (state = "", action) => {
  switch (action.type) {
    case SET_PODE_ANSWERS:
      const question_id = action.payload.charAt(0);
      for (let i = 0; i < state.length; i++) {
        // question already answered
        if (question_id === state[i].charAt(0)) {
          // update the answer for this question
          state[i] = action.payload;
          return state;
        }
      }
      // question not answered
      return [...state, action.payload];
    default:
      return state;
  }
};

export const reducers = combineReducers({
  Season: seasonReducer,
  PodeAnswers: pode_answers_Reducer,
});
