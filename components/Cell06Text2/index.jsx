import React from "react";
import TextIcon9 from "../TextIcon9";
import "./Cell06Text2.css";

function Cell06Text2(props) {
  const { textIcon9Props } = props;

  return (
    <div className="cell-06-text-15">
      <TextIcon9>{textIcon9Props.children}</TextIcon9>
    </div>
  );
}

export default Cell06Text2;
