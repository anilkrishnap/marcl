import React from "react";
import TextIcon33 from "../TextIcon33";
import "./Cell07Text5.css";

function Cell07Text5(props) {
  const { textIcon3Props } = props;

  return (
    <div className="cell-07-text-19">
      <TextIcon33>{textIcon3Props.children}</TextIcon33>
    </div>
  );
}

export default Cell07Text5;
