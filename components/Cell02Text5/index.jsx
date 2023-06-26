import React from "react";
import TextIcon from "../TextIcon";
import "./Cell02Text5.css";

function Cell02Text5(props) {
  const { className, textIconProps } = props;

  return (
    <div className={`cell-02-text-13 ${className || ""}`}>
      <TextIcon className={textIconProps.className} />
    </div>
  );
}

export default Cell02Text5;
