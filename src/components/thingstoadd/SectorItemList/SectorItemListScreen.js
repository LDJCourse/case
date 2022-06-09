import React from "react";

const SectorItemListScreen = () => {
  return (
    <div>
      {/* Commitments */}
      <img className="w-full top-head-image" src={idexlogo} />
      <div></div>
      <h1 className="list-header">Alternative Energy</h1>
      <SectorItem />
    </div>
  );
};

const SectorItem = () => {
  return (
    <div className="sector-item-container">
      <img src={idexlogo} className="sector-item-image" />
      <div className="sector-item-details">
        <span className="sector-item-details-name">Atlantica Yield</span>
        <span className="sector-item-details-price">82,69 €</span>
      </div>
    </div>
  );
};

export default SectorItemListScreen;
