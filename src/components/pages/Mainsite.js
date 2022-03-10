import React from "react";

// Components
import AvailableCash from "../Cash/AvailableCash";
import DougnutChart from "../Chart/DougnutChart";
import Navbar from "../layout/Navbar";
import WelcomeMessage from "../Message/WelcomeMessage";
import PortfolioList from "../Portfolio/PortfolioList";
import Main from "../UI/Main";

const Mainsite = () => {
  return (
    <Main>
      <WelcomeMessage />
      <Navbar />
      <DougnutChart />
      <AvailableCash />
      <PortfolioList />
    </Main>
  );
};

export default Mainsite;
