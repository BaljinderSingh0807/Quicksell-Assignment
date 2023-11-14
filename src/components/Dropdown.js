import DropdownBtn from "./DropdownBtn";

const Dropdown = ({ handleItemClick }) => {
  return (
    <>
      <div className="dropdown">
        <DropdownBtn handleItemClick={handleItemClick} />
      </div>
    </>
  );
};

export default Dropdown;
