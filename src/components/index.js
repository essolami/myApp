import loadable from "@loadable/component";
// ------------------------------- Components --------------------------
const SideBar = loadable(() => import("./sideBar"));
const UserPlaylists = loadable(() => import("./userPlaylists"));
const Player = loadable(() => import("./player"));
const Header = loadable(() => import("./header"));
const Playlists = loadable(() => import("./playlists"));

// ------------------------------- UI ----------------------------
const ErrorBoundary = loadable(() => import("./errorBoundary"));
const Loading = loadable(() => import("./UI/loading"));
const Modal = loadable(() => import("./UI/Modal"));

// ------------------------------- SVGS --------------------------
const SpotifyIcon = loadable(() => import("./svgs/spotifyIcon"));
const HomeIcon = loadable(() => import("./svgs/homeIcon"));
const LibraryIcon = loadable(() => import("./svgs/libraryIcon"));
const SearchIcon = loadable(() => import("./svgs/searchIcon"));
const AddPlaylistIcon = loadable(() => import("./svgs/addPlaylistIcon"));
const LikedPlaylistIcon = loadable(() => import("./svgs/likedPlaylistIcon"));
const InstallIcon = loadable(() => import("./svgs/installIcon"));
const BackIcon = loadable(() => import("./svgs/backIcon"));
const HeartIcon = loadable(() => import("./svgs/heartIcon"));
const CastIcon = loadable(() => import("./svgs/castIcon"));
const ShuffleIcon = loadable(() => import("./svgs/shuffleIcon"));
const PreviousIcon = loadable(() => import("./svgs/previousIcon"));
const NextIcon = loadable(() => import("./svgs/nextIcon"));
const RepeatIcon = loadable(() => import("./svgs/repeatIcon"));
const PlayIcon = loadable(() => import("./svgs/playIcon"));

export {
  // components
  SideBar,
  UserPlaylists,
  Player,
  Header,
  Playlists,
  // Svgs
  SpotifyIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  AddPlaylistIcon,
  LikedPlaylistIcon,
  InstallIcon,
  BackIcon,
  HeartIcon,
  CastIcon,
  ShuffleIcon,
  PreviousIcon,
  NextIcon,
  RepeatIcon,
  PlayIcon,
  // UI
  ErrorBoundary,
  Loading,
  Modal,
};
