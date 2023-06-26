import React from "react";
import TextIcon32 from "../TextIcon32";
import "./Cell07Text3.css";

function Cell07Text3(props) {
  const { className, textIcon32Props } = props;

  return (
    <div className={`cell-07-text-12 ${className || ""}`}>
      <TextIcon32 className={textIcon32Props.className}>{textIcon32Props.children}</TextIcon32>
    </div>
  );
}

export default Cell07Text3;
