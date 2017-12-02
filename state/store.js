// external
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";

// internal
import cfg from "../config";
import appRedux, { appState as app } from "./app";
import featureRedux, { featureState as feature } from "./feature";

const initialState = { app, feature };

const errors = store => next => action => {
  if (action.error) {
    console.warn(
      "Error detected in",
      action.type,
      action.payload,
      action.meta,
      store.getState()
    );
  }

  next(action);
};

const middleware = [thunk, errors];

if (cfg.development) {
  middleware.push(logger);
}

export default (initialState = initialState, { isServer }) =>
  createStore(
    combineReducers({
      app: appRedux,
      feature: featureRedux
    }),
    initialState,
    applyMiddleware.apply(null, middleware)
  );
