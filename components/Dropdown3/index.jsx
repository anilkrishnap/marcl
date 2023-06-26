import React from "react";
import DropdownMenu4 from "../DropdownMenu4";
import DropdownMenu2 from "../DropdownMenu2";
import Scrollbar2 from "../Scrollbar2";
import "./Dropdown3.css";

function Dropdown3(props) {
  const {
    dropdownMenu1Props,
    dropdownMenu2Props,
    dropdownMenu3Props,
    dropdownMenu4Props,
    dropdownMenu2Props2,
    dropdownMenu5Props,
    scrollbar2Props,
  } = props;

  return (
    <div className="dropdown-10">
      <div className="menu">
        <DropdownMenu4 text={dropdownMenu1Props.text} stateProps={dropdownMenu1Props.stateProps} />
        <DropdownMenu4 text={dropdownMenu2Props.text} stateProps={dropdownMenu2Props.stateProps} />
        <DropdownMenu4 text={dropdownMenu3Props.text} stateProps={dropdownMenu3Props.stateProps} />
        <DropdownMenu4 text={dropdownMenu4Props.text} stateProps={dropdownMenu4Props.stateProps} />
        <DropdownMenu2
          text={dropdownMenu2Props2.text}
          icon={dropdownMenu2Props2.icon}
          stateProps={dropdownMenu2Props2.stateProps}
        />
        <DropdownMenu4 text={dropdownMenu5Props.text} stateProps={dropdownMenu5Props.stateProps} />
      </div>
      <Scrollbar2 stateProps={scrollbar2Props.stateProps} />
    </div>
  );
}

export default Dropdown3;
