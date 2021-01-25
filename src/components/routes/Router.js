import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Search from "../pages/Search";
import TV from "../pages/TV";
import Header from "../header/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/tv"} exact>
          <TV />
        </Route>
        <Route path={"/detail"}>
          <Detail />
        </Route>
        <Route path={"/search"}>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
