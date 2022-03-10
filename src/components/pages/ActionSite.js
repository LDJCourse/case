import React from "react";

// Components
import Navbar from "../layout/Navbar";
import ActionsMessage from "../Message/ActionsMessage";
import TransactionActions from "../Transactions/TransactionActions";
import Transactions from "../Transactions/Transactions";
import Footer from "../UI/Footer";
import Main from "../UI/Main";

const ActionSite = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Main>
        <ActionsMessage />
        <Navbar />
        <TransactionActions />
        <Transactions />
      </Main>

      <Footer />
    </div>
  );
};

export default ActionSite;
