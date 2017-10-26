import * as type from "./types";
import { combineReducers } from "redux";

const featureReducer = (state = [], action) => {
  switch (action.type) {
    case type.FETCH:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  featureReducer
});
