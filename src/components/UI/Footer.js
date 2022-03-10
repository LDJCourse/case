import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-20 shadow-3xl bg-opacity-40 bg-gray-100">
      <div className="pt-4 pl-6  flex items-center">
        <Link to="/" className="font-semibold flex items-center">
          <span className="material-icons">arrow_back_ios</span>Back
        </Link>
      </div>
    </div>
  );
};

export default Footer;
