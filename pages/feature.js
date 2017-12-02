// external
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";

// next
import Link from "next/link";

// internal
import makeStore from "../state/store";
import Show from "../components/Show";
import { actions, selectors } from "../state/feature";

const Page = ({ error, text, posts, request }) => (
  <div>
    <Link href="/" prefetch>
      <a>Go to home</a>
    </Link>
    <p>{text}</p>
    <Show />
    {posts.map(p => <p key={p.id}>{p.title}</p>)}
    <button onClick={() => request()}>Req</button>
  </div>
);

Page.getInitialProps = async ({ store, isServer }) => {
  await store.dispatch(actions.request());
};

const mapStateToProps = ({ feature }) => ({
  posts: feature.posts,
  loading: feature.loading,
  text: selectors.selectPostCount(feature)
});

const mapDispatchToProps = dispatch => ({
  request: bindActionCreators(actions.request, dispatch)
});

export default withRedux({
  mapDispatchToProps,
  mapStateToProps,
  createStore: makeStore
})(Page);
