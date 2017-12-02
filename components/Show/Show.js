import { connect } from "react-redux";

const ErrorMessage = ({ code, message }) => (
  <span>
    Error: {code}, {message}
  </span>
);

const Show = ({ error, loading }) => (
  <div>
    <p>Loading: {loading ? "true" : "false"}</p>
    <p>
      {error ? <ErrorMessage code={error.code} message={error.message} /> : ""}
    </p>
  </div>
);

export default connect(({ feature }) => ({
  error: feature.error
}))(Show);
