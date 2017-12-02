// external
import { bindActionCreators } from "redux";
import { actions } from "../state/app";
import withRedux from "next-redux-wrapper";

// next
import Link from "next/link";

// internal
import makeStore from "../state/store";

const Page = ({ app, load, loaded }) => (
  <div>
    <Link href="/feature" prefetch>
      <a>Go to feature</a>
    </Link>
    <p>Is loading: {app.loading ? "true" : "false"}</p>
    <button onClick={() => load()}>Load me!</button>
    <button onClick={() => loaded()}>Stop me!</button>
  </div>
);

const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => ({
  load: bindActionCreators(actions.load, dispatch),
  loaded: bindActionCreators(actions.loaded, dispatch)
});

export default withRedux({
  mapStateToProps,
  mapDispatchToProps,
  createStore: makeStore
})(Page);
