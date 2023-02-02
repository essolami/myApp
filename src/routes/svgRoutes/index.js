import loadable from "@loadable/component";

const SpotifyIcon = loadable(() => import("../../components/svgs/spotifyIcon"));
const HomeIcon = loadable(() => import("../../components/svgs/homeIcon"));
const LibraryIcon = loadable(() => import("../../components/svgs/libraryIcon"));
const SearchIcon = loadable(() => import("../../components/svgs/searchIcon"));
const AddPlaylistIcon = loadable(() =>
  import("../../components/svgs/addPlaylistIcon")
);
const LikedPlaylistIcon = loadable(() =>
  import("../../components/svgs/likedPlaylistIcon")
);
const InstallIcon = loadable(() => import("../../components/svgs/installIcon"));
const BackIcon = loadable(() => import("../../components/svgs/backIcon"));
const HeartIcon = loadable(() => import("../../components/svgs/heartIcon"));
const CastIcon = loadable(() => import("../../components/svgs/castIcon"));
const ShuffleIcon = loadable(() => import("../../components/svgs/shuffleIcon"));
const Previousicon = loadable(() =>
  import("../../components/svgs/previousIcon")
);
const Nexticon = loadable(() => import("../../components/svgs/nextIcon"));
const Repeaticon = loadable(() => import("../../components/svgs/repeatIcon"));
const Playicon = loadable(() => import("../../components/svgs/playIcon"));

export {
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
  Previousicon,
  Nexticon,
  Repeaticon,
  Playicon,
};
