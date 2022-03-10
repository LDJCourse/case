import React from "react";

// Images
import fordlogo from "../images/fordlogo.png";
import idexlogo from "../images/idexlogo.png";

const Transactions = () => {
  return (
    <div>
      <Transaction
        name="Account ...1234"
        text="Deposit"
        amount="+ € 250.00"
        balance="Balance € 432.82"
        date="14.01.2022"
        img={fordlogo}
      />
      <Transaction
        name="Ford Motor Co."
        text="F"
        amount="€ 17.90"
        balance="1 stock"
        date="27.12.2021"
        sell={true}
        noLogo={true}
      />
      <Transaction
        name="Ideanomics Inc."
        text="IDEX"
        amount=" € 235.90"
        balance="2 stocks"
        date="08.12.2021"
        sell={true}
        noLogo={true}
      />
      <Transaction
        name="Account ...1234"
        text="Withdrawal"
        amount="- € 100.00"
        balance="Balance € 238.82"
        date="07.12.2021"
        img={idexlogo}
      />
    </div>
  );
};

const Transaction = ({
  name,
  text,
  amount,
  balance,
  date,
  sell,
  img,
  noLogo,
}) => {
  const order = (
    <div className="h-10 w-10 flex justify-center items-center rounded-full text-white bg-pink-200">
      <span className="material-icons">payments</span>
    </div>
  );

  const logoImage = <img className="h-10 w-12" src={img} />;

  const logo = noLogo === true ? order : logoImage;

  return (
    <div className="my-5 py-2 px-2 rounded-lg shadow-xl bg-opacity-90 cursor-pointer bg-white">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="">{logo}</div>

          <div className="px-2 ">
            <h1 className="font-bold">{name}</h1>
            <h1 className="text-xs tracking-wider text-gray-400">{text}</h1>
          </div>
        </div>
        {sell && (
          <h1 className="self-start font-semibold text-red-500">SELL</h1>
        )}
        <div className="flex flex-col items-end">
          <h1 className="font-bold">{amount}</h1>

          <h1 className="text-sm  text-neutral-400">{balance}</h1>

          <h1 className="text-sm text-neutral-400">{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
