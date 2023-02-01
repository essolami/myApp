import loadable from "@loadable/component";

const CookiesModal = loadable(
  () => import("../../components/modals/CookiesModal"),
  {
    fallback: null,
  }
);
export { CookiesModal };
