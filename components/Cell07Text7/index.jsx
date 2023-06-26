import React from "react";
import TextIcon33 from "../TextIcon33";
import "./Cell07Text7.css";

function Cell07Text7(props) {
  const { textIcon33Props } = props;

  return (
    <div className="cell-07-text-17">
      <TextIcon33 className={textIcon33Props.className}>{textIcon33Props.children}</TextIcon33>
    </div>
  );
}

export default Cell07Text7;
