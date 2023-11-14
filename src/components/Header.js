import React from "react";
import Dropdown from "./Dropdown";

const Header = ({ handleItemClick }) => {
  return (
    <header className="header">
      <Dropdown handleItemClick={handleItemClick} />
    </header>
  );
};

export default Header;
