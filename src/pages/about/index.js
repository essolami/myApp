import loadable from "@loadable/component";
import { ErrorBoundary } from "../../routes/_helpersRoutes";
import { Loading } from "../../routes/_helpersRoutes";

import { fecthData } from "./about";

const About = loadable(() => import("./about"), {
  fallback: <Loading />,
});

export default (props) => (
  <ErrorBoundary>
    <About {...props} />
  </ErrorBoundary>
);
export { fecthData };
