import { SET_PODE_ANSWERS } from ".";
import { SET_SEASON } from "./Constants";

export const setSeasonAction = (season) => {
  return {
    type: SET_SEASON,
    payload: season,
  };
};

export const set_pode_answers_Action = (answer) => {
  return {
    type: SET_PODE_ANSWERS,
    payload: answer,
  };
};
