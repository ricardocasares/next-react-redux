import { LOADED, LOADING } from "./types";

export const load = (payload = true) => ({
  type: LOADING,
  payload: payload
});

export const loaded = (payload = false) => ({
  type: LOADED,
  payload: payload
});
