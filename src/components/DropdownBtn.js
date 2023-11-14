import React from "react";
import { useState, useEffect, useRef } from "react";
import DropdownSubBtn from "./DropdownSubBtn";
import { BsChevronDown } from "react-icons/bs";
import { GoMultiSelect } from "react-icons/go";

const DropdownBtn = ({ handleItemClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState("Status");
  const [selectedOrdering, setSelectedOrdering] = useState("By Title");

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef}>
      <button className="dropdownBtn" onClick={(e) => setIsActive(!isActive)}>
        <GoMultiSelect /> Display <BsChevronDown />
      </button>
      {isActive && (
        <div className="dropdownContent">
          <div className="dropdownItem">
            Grouping:{" "}
            <DropdownSubBtn
              handleItemClick={handleItemClick}
              subOptions={["Status", "Priority", "Users"]}
              optionValue={selectedGrouping}
              setOptionValue={setSelectedGrouping}
            />
          </div>
          <div className="dropdownItem">
            Ordering:{" "}
            <DropdownSubBtn
              handleItemClick={handleItemClick}
              subOptions={["By Title", "By Priority"]}
              optionValue={selectedOrdering}
              setOptionValue={setSelectedOrdering}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownBtn;
