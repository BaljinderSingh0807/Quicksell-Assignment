import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

const DropdownSubBtn = ({
  handleItemClick,
  subOptions,
  optionValue,
  setOptionValue,
}) => {
  const [isActive, setIsActive] = useState(false);

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

  const onItemClick = (item) => {
    setIsActive(false);
    handleItemClick(item);
    setOptionValue(item);
  };

  return (
    <div className="subBtnContainer" ref={menuRef}>
      <button
        className="subDropdownBtn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {optionValue} <BsChevronDown />
      </button>
      {isActive && (
        <div className="subDropdownContent">
          {subOptions.map((option) => (
            <div
              key={option}
              className="subDropdownItem"
              onClick={() => onItemClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSubBtn;
