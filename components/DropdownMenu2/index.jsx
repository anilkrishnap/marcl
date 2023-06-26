import React from "react";
import State from "../State";
import "./DropdownMenu2.css";

function DropdownMenu2(props) {
  const { text, icon, stateProps } = props;

  return (
    <div className="dropdown-menu-1">
      <div className="frame-7-1">
        <State className={stateProps.className} />
        <div className="content-and-icon-1">
          <div className="text-74 neuehaasgroteskdisplaystd-regular-normal-black-14px">{text}</div>
          <img className="icon-65" src={icon} alt="Icon" />
        </div>
      </div>
      <div className="divider-66"></div>
    </div>
  );
}

export default DropdownMenu2;
