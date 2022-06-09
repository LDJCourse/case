import React from "react";

const Top100RankingScreen = () => {
  return (
    <div>
      {/* Commitments */}
      <img className="w-full top-head-image" src={idexlogo} />
      <h1 className="list-header ">Global top 100</h1>

      <div className="top100-list-container ">
        <Top100Ranking />
        <Top100ListItem />
      </div>
    </div>
  );
};

const Top100Ranking = () => {
  return (
    <div className="top100-ranking-container">
      <span className="ranking-number">1</span>
      <span className="ranking-icon">🏅</span>
    </div>
  );
};

const Top100ListItem = () => {
  return (
    <div className="list-item-container">
      <img
        src={idexlogo}
        className="w-8 h-8 mx-2 rounded-full list-item-image"
      />
      <div className="list-item-details-container">
        <span className="list-item-name font-bold">Vestas</span>

        <span className="list-item-info">24,26 </span>
        <span className="list-item-info">Alternative Energy</span>
      </div>
    </div>
  );
};

export default Top100RankingScreen;
