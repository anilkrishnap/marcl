import React from "react";
import TextIcon22 from "../TextIcon22";
import "./Cell06Text22.css";

function Cell06Text22(props) {
  const { className } = props;

  return (
    <div className={`cell-06-text ${className || ""}`}>
      <TextIcon22 />
    </div>
  );
}

export default Cell06Text22;
