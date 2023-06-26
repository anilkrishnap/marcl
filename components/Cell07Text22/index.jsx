import React from "react";
import TextIcon33 from "../TextIcon33";
import "./Cell07Text22.css";

function Cell07Text22(props) {
  const { textIcon3Props } = props;

  return (
    <div className="cell-07-text-14">
      <TextIcon33>{textIcon3Props.children}</TextIcon33>
    </div>
  );
}

export default Cell07Text22;
