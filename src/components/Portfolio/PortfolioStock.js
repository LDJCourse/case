import React from "react";

// Components

import StockOptions from "./StockOptions";

const PortfolioStock = ({
  id,
  name,
  initial,
  price,
  percentChange,
  stocks,
  img,
}) => {
  return (
    <div className="relative my-5 py-2 px-2 rounded-lg shadow-xl bg-opacity-90 cursor-pointer bg-white">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div>
            <img className="h-10 w-10 rounded-full" src={img} alt="logo" />
          </div>

          <div className="px-2 ">
            <h1 className="font-bold">{name}</h1>
            <h1 className="tracking-wider">{initial}</h1>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="font-bold text-lg">€ {price.toFixed(2)}</h1>
          <h1
            className={`${
              percentChange > 0 ? "text-green-500" : "text-red-500"
            } text-sm font-semibold`}
          >
            {percentChange.toFixed(2)}%
          </h1>

          <h1 className="font-semibold text-neutral-500">
            {stocks} {stocks > 1 ? "stocks" : "stock"}
          </h1>
        </div>
      </div>
      {id === 2 && <StockOptions />}
    </div>
  );
};

export default PortfolioStock;
