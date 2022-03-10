import React from "react";

// Components
import Footer from "../UI/Footer";
import Main from "../UI/Main";

// Data
import { personalStocks } from "../Portfolio/stockData";

const MyPortfolio = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Main>
        <div className="mx-5">
          <h1 className="my-3 text-center text-2xl font-bold tracking-wide">
            My Portfolio
          </h1>
          {personalStocks}
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default MyPortfolio;
