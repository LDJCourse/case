import React from "react";
import { Link } from "react-router-dom";

// Data
import { renderedStocks } from "./stockData";

const PortfolioList = () => {
  return (
    <div>
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <Link to="/portfolio">View All</Link>
      </div>
      {renderedStocks}
    </div>
  );
};

export default PortfolioList;
