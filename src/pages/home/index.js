import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
const Home = loadable(() => import("./home"), {
  fallback: null,
});

export default (props) => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);