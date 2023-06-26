import React from "react";
import Content from "../Content";
import Dropdown from "../Dropdown";
import "./Button.css";

function Button(props) {
  const { dropdownProps } = props;

  return (
    <div className="button">
      <Content />
      <Dropdown src={dropdownProps.src} />
    </div>
  );
}

export default Button;
