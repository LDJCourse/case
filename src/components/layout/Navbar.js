import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my-8">
      <NavbarGroup>
        <NavbarLink name="Portfolio" navTo="/" />
        <NavbarItem name="Explore" />
        <NavbarLink name="Actions" navTo="/actions" />
        <NavbarItem name="Search" />
      </NavbarGroup>
    </nav>
  );
};

const NavbarLink = ({ name, navTo }) => {
  return (
    <div className="py-3 px-2">
      <NavLink
        className=" font-semibold tracking-wide rounded-full text-gray-800 text-opacity-70"
        activeStyle={{
          color: "#fff",
          backgroundColor: "#212529",
          padding: "13px",
        }}
        exact
        to={`${navTo}`}
      >
        {name}
      </NavLink>
    </div>
  );
};

const NavbarItem = ({ name }) => {
  return (
    <div className="py-3 px-2">
      <h1 className=" font-semibold tracking-wide rounded-full text-gray-800 text-opacity-70">
        {name}
      </h1>
    </div>
  );
};

const NavbarGroup = ({ children }) => {
  return (
    <div className="py-1 px-2 rounded-full flex justify-between bg-opacity-50 bg-neutral-200">
      {children}
    </div>
  );
};

export default Navbar;
