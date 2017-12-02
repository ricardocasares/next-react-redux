// external
import fetch from "isomorphic-unfetch";

// internal
import api from "../../api";
import { PENDING, RESOLVED, REJECTED } from "./types";

export const pending = payload => ({ type: PENDING, payload });
export const resolved = payload => ({ type: RESOLVED, payload });

export const request = () => async dispatch => {
  dispatch(pending(true));

  try {
    const posts = await api.posts.all();
    dispatch(resolved(posts));
  } catch (error) {
    dispatch(rejected(error));
  } finally {
    dispatch(pending(false));
  }
};

export const rejected = payload => ({
  type: REJECTED,
  error: true,
  ...errorWrap(payload)
});

const errorWrap = err => ({
  payload: err,
  meta: {
    code: err.code || 500,
    message: err.message || "Something went wrong"
  }
});
