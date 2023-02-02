import loadable from "@loadable/component";
const ErrorBoundary = loadable(() => import("../../components/errorBoundary"), {
  fallback: null,
});
const Loading = loadable(() => import("../../components/loading"), {
  fallback: null,
});

export { ErrorBoundary, Loading };
