import React from "react";

const AvailableCash = () => {
  return (
    <div className="my-4 flex justify-center ">
      <div className="w-7/12 flex justify-between items-center">
        <div className="w-10" />
        <div className="text-center">
          <h1 className="font-semibold">€ 10.32</h1>
          <h1 className="text-gray-500">Available Cash</h1>
        </div>
        <div className="flex justify-center items-center h-10 w-10 rounded-lg bg-pink-300">
          <span className="material-icons text-white">add</span>
        </div>
      </div>
    </div>
  );
};

export default AvailableCash;
