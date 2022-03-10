import React from "react";

// Components
import Icon from "../UI/Icon";

const StockOptions = () => {
  return (
    <div className="absolute w-full h-full top-1 right-0 flex items-center bg-gray-100">
      <div className="w-full px-2 flex justify-between ">
        <Icon name="Matches" iconName="favorite" />
        <Icon name="News" iconName="newspaper" />
        <Icon name="Invest" selected iconName="payments" />
        <Icon name="Academy" iconName="menu_book" />
        <Icon name="M!Club" iconName="forum" />
      </div>
    </div>
  );
};

export default StockOptions;
