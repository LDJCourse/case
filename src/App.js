import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import MyPortfolio from "./components/pages/PortfolioSite";
import ActionSite from "./components/pages/ActionSite";
import Mainsite from "./components/pages/Mainsite";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Mainsite} />
        <Route exact path="/actions" component={ActionSite} />
        <Route exact path="/portfolio" component={MyPortfolio} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
