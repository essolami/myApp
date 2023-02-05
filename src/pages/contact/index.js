import loadable from "@loadable/component";
import { ErrorBoundary } from "../../routes/_helpersRoutes";
import { Loading } from "../../routes/_helpersRoutes";

const Contact = loadable(() => import("./contact"), {
  fallback: <Loading />,
});

export default (props) => (
  <ErrorBoundary>
    <Contact {...props} />
  </ErrorBoundary>
);
