import React from "react";

import { BrowserRouter, Route, Switch, Await } from "react-router-dom";
import config from "../config";
import { Helmet } from "react-helmet";

import "./style.scss";
import routes from "../pages";
import { Header, Player, SideBar, Loading } from "../components";

function App() {
  return (
    <div className="App">
      <Helmet {...config.APP} />
      <div className="side_bar">
        <SideBar />
      </div>
      <div className="main_page">
        <Header />
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  );
}
export default App;
