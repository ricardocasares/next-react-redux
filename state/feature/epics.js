import * as actions from "./actions";

const featureEpic = distance => dispatch => {
  dispatch(actions.fetch).then(() => {
    dispatch(actions.create);
    dispatch(actions.remove);
  });
};

export { featureEpic };
