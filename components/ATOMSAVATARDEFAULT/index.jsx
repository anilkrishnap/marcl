import React from "react";
import "./ATOMSAVATARDEFAULT.css";

function ATOMSAVATARDEFAULT(props) {
  const { className } = props;

  return <div className={`atomsavatardefault ${className || ""}`}></div>;
}

export default ATOMSAVATARDEFAULT;
