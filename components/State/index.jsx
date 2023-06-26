import React from "react";
import "./State.css";

function State(props) {
  const { className } = props;

  return <div className={`rectangle-5-1 ${className || ""}`}></div>;
}

export default State;
