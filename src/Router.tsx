import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
// import { useState } from "react";
// import styled from "styled-components";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </HashRouter>
  );
}
export default Router;
