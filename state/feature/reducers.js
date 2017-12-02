import { PENDING, RESOLVED, REJECTED } from "./types";

export const featureState = {
  posts: [],
  error: null,
  loading: false
};

export default (state = featureState, action) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: action.payload };
    case REJECTED:
      return { ...state, error: action.meta };
    case RESOLVED:
      return { ...state, posts: action.payload, error: null };
  }

  return state;
};
