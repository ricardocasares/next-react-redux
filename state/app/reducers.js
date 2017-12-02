import { LOADED, LOADING } from "./types";

export const appState = {
  loading: false
};

export default (state = appState, { type, payload }) => {
  switch (type) {
    case LOADED:
      return { ...state, loading: payload };
    case LOADING:
      return { ...state, loading: payload };
  }

  return state;
};
