import React from "react";
import TextIcon4 from "../TextIcon4";
import "./Table52.css";

function Table52(props) {
  const { className, textIcon4Props } = props;

  return (
    <div className={`cell-05-text ${className || ""}`}>
      <TextIcon4>{textIcon4Props.children}</TextIcon4>
    </div>
  );
}

export default Table52;
