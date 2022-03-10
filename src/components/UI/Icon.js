import React from "react";

const Icon = ({ name, iconName, selected }) => {
  return (
    <div
      className={`${
        selected ? "text-black" : "text-gray-400"
      } flex flex-col items-center `}
    >
      <span className="material-icons">{iconName}</span>
      <h1 className="text-xs">{name}</h1>
    </div>
  );
};

export default Icon;
