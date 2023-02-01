import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
import { Loading } from "../../components";

const Contact = loadable(() => import("./contact"), {
  fallback: <Loading/>,
});

export default (props) => (
  <ErrorBoundary>
    <Contact {...props} />
  </ErrorBoundary>
);