import * as actions from "../actions";

test("create reducer", () => {
  expect(actions.create()).toMatchObject({ type: "feature/ADD" });
});

test("remove reducer", () => {
  expect(actions.remove()).toMatchObject({ type: "feature/REMOVE" });
});
