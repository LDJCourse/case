import React from "react";

// Components
import Icon from "../UI/Icon";

const TransactionActions = () => {
  return (
    <div className="flex justify-around">
      <Icon name="Active orders" iconName="loop" />
      <Icon
        name="Trades & Transactions"
        selected
        iconName="check_circle_outline"
      />
      <Icon name="Cancelations" iconName="not_interested" />
    </div>
  );
};

export default TransactionActions;
