import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NotFound from "./NotFound";

const routes = [
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    component: NotFound,
  },
];

export default routes;
