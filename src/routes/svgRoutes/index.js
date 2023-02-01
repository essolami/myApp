import loadable from "@loadable/component";

const SpotifyIcon = loadable(
  () => import("../../components/svgs/spotifyIcon"),
  {
    fallback: null,
  }
);
const HomeIcon = loadable(() => import("../../components/svgs/homeIcon"), {
  fallback: null,
});
const LibraryIcon = loadable(
  () => import("../../components/svgs/libraryIcon"),
  {
    fallback: null,
  }
);
const SearchIcon = loadable(() => import("../../components/svgs/searchIcon"), {
  fallback: null,
});
const AddPlaylistIcon = loadable(
  () => import("../../components/svgs/addPlaylistIcon"),
  {
    fallback: null,
  }
);
const LikedPlaylistIcon = loadable(
  () => import("../../components/svgs/likedPlaylistIcon"),
  {
    fallback: null,
  }
);
const InstallIcon = loadable(
  () => import("../../components/svgs/installIcon"),
  {
    fallback: null,
  }
);
const BackIcon = loadable(() => import("../../components/svgs/backIcon"), {
  fallback: null,
});
const HeartIcon = loadable(() => import("../../components/svgs/heartIcon"), {
  fallback: null,
});
const CastIcon = loadable(() => import("../../components/svgs/castIcon"), {
  fallback: null,
});
const ShuffleIcon = loadable(
  () => import("../../components/svgs/shuffleIcon"),
  {
    fallback: null,
  }
);
const PreviousIcon = loadable(
  () => import("../../components/svgs/previousIcon"),
  {
    fallback: null,
  }
);
const NextIcon = loadable(() => import("../../components/svgs/nextIcon"), {
  fallback: null,
});
const RepeatIcon = loadable(() => import("../../components/svgs/repeatIcon"), {
  fallback: null,
});
const PlayIcon = loadable(() => import("../../components/svgs/playIcon"), {
  fallback: null,
});

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
  PreviousIcon,
  NextIcon,
  RepeatIcon,
  PlayIcon,
};
