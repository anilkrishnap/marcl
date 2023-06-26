import React from "react";
import TextIcon33 from "../TextIcon33";
import "./Cell07Text2.css";

function Cell07Text2(props) {
  const { textIcon33Props } = props;

  return (
    <div className="cell-07-text-5">
      <TextIcon33>{textIcon33Props.children}</TextIcon33>
    </div>
  );
}

export default Cell07Text2;
