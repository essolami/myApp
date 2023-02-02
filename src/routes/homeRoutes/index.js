import loadable from "@loadable/component";

const SideBar = loadable(() => import("../../components/sideBar"), {
  fallback: null,
});
const MyPlaylists = loadable(() => import("../../components/myPlaylists"), {
  fallback: null,
});
const Player = loadable(() => import("../../components/player"), {
  fallback: null,
});
const Header = loadable(() => import("../../components/header"), {
  fallback: null,
});
const Playlists = loadable(() => import("../../components/playlists"), {
  fallback: null,
});
export { SideBar, MyPlaylists, Player, Header, Playlists };
