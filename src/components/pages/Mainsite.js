import React from "react";

// Components
import AvailableCash from "../Cash/AvailableCash";
import DougnutChart from "../Chart/DougnutChart";
import Navbar from "../layout/Navbar";
import WelcomeMessage from "../Message/WelcomeMessage";
import PortfolioList from "../Portfolio/PortfolioList";
import Main from "../UI/Main";
import Icon from "../UI/Icon";

import fordlogo from "../images/fordlogo.png";
import idexlogo from "../images/idexlogo.png";
import oatlylogo from "../images/oatlylogo.png";

const DUMDATA = [
  {
    id: 1,
    name: "Vestas",
    initial: "Automobile industry",
    price: 17.49,
    percentChange: 2.5,
    placement: 1,
    img: fordlogo,
  },
  {
    id: 2,
    name: "Ideanomics Inc.",
    initial: "IDEX",
    price: 7.4,
    percentChange: 0.12,
    placement: 2,
    img: idexlogo,
  },
  {
    id: 3,
    name: "Oatly Group",
    initial: "OTLY",
    price: 6.22,
    percentChange: -5.02,
    placement: 3,
    img: oatlylogo,
  },
];

const Mainsite = () => {
  // Creating a list of companies
  const renderedCompanies = DUMDATA.map((d) => (
    <Company
      key={d.id}
      companyName={d.name}
      price={d.price}
      placement={d.placement}
    />
  ));
  return (
    <div>
      {/* Commitments */}

      <ExploreBySelection title="Explore by Commitments">
        <ExploreContainer title="Global Top 100">
          {renderedCompanies}
        </ExploreContainer>
        <ExploreContainer title="Science Based Targets">
          {renderedCompanies}
        </ExploreContainer>
      </ExploreBySelection>
      {/* Sectors */}

      <ExploreBySelection title="Explore by Sectors">
        <ExploreContainer title="Health Care">
          {renderedCompanies}
        </ExploreContainer>
        <ExploreContainer title="Food Producers">
          {renderedCompanies}
        </ExploreContainer>
      </ExploreBySelection>
    </div>
  );
};

const ExploreBySelection = ({ title, children }) => {
  return (
    <div>
      <div className="explore-title">{title}</div>
      <div>{children}</div>
    </div>
  );
};

const ExploreContainer = ({ title, children }) => {
  return (
    <div>
      <div className="justify-content-between">
        <h1 className="section-title">{title}</h1>
      </div>
      <div className="scroll-horizontal">{children}</div>
    </div>
  );
};

const Company = ({ companyName, price, placement, img }) => {
  return (
    <div className="company-container">
      <div className="company-images">
        <img className="background-logo" src={oatlylogo} />

        <img className="background-image" src={fordlogo} />
      </div>

      <div className="company-description ">
        <div className="company-details">
          <div className="company-name">{companyName}</div>
          <div className="company-price">€ {price}</div>
        </div>
        <div className="company-placement">
          <div>{placement} 🏅</div>
          {/* <span className="material-icons">check_circle_outline</span> */}
        </div>
      </div>
    </div>
  );
};

export default Mainsite;
