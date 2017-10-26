import Button from "../Button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});
