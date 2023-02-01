import loadable from "@loadable/component";
import { ErrorBoundary } from "../../components";
import { Loading } from "../../components";

import { fecthData } from "./about";

const About = loadable(() => import("./about"), {
  fallback: <Loading/>,
});

export default (props) => (
  <ErrorBoundary>
    <About {...props} />
  </ErrorBoundary>
);
export { fecthData };