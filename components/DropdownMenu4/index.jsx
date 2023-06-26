import React from "react";
import State from "../State";
import "./DropdownMenu4.css";

function DropdownMenu4(props) {
  const { text, stateProps } = props;

  return (
    <div className="dropdown-menu">
      <div className="frame-7">
        <State className={stateProps.className} />
        <div className="content-and-icon">
          <div className="text-73 neuehaasgroteskdisplaystd-regular-normal-black-14px">{text}</div>
        </div>
      </div>
      <div className="divider-65"></div>
    </div>
  );
}

export default DropdownMenu4;
