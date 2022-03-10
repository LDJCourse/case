import React from "react";

const ActionsMessage = () => {
  return (
    <div className="mx-2 flex items-center">
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-opacity-70 bg-pink-300">
        <span className="material-icons">person_outline</span>
      </div>
      <div className="ml-4 text-xl font-bold">
        <h1>Hi Carolyne!</h1>
        <h1>Here are your recent actions</h1>
      </div>
    </div>
  );
};

export default ActionsMessage;
