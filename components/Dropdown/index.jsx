import React from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const { src } = props;

  return (
    <div className="dropdown">
      <div className="rectangle-30-1"></div>
      <img className="icon-53" src={src} alt="Icon" />
    </div>
  );
}

export default Dropdown;
