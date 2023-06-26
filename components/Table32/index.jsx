import React from "react";
import TextIcon from "../TextIcon";
import "./Table32.css";

function Table32(props) {
  const { className } = props;

  return (
    <div className={`cell-02-text ${className || ""}`}>
      <TextIcon />
    </div>
  );
}

export default Table32;
