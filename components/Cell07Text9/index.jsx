import React from "react";
import TextIcon32 from "../TextIcon32";
import "./Cell07Text9.css";

function Cell07Text9(props) {
  const { textIcon32Props } = props;

  return (
    <div className="cell-07-text-20">
      <TextIcon32 className={textIcon32Props.className}>{textIcon32Props.children}</TextIcon32>
    </div>
  );
}

export default Cell07Text9;
