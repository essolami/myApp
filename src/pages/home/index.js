import loadable from "@loadable/component";
import { ErrorBoundary } from "../../routes/_helpersRoutes";
const Home = loadable(() => import("./home"), {
  fallback: null,
});

export default (props) => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);
