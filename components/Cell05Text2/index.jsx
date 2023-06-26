import React from "react";
import TextIcon8 from "../TextIcon8";
import "./Cell05Text2.css";

function Cell05Text2(props) {
  const { className, textIcon8Props } = props;

  return (
    <div className={`cell-05-text-8 ${className || ""}`}>
      <TextIcon8>{textIcon8Props.children}</TextIcon8>
    </div>
  );
}

export default Cell05Text2;
