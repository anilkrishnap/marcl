import React from "react";
import Text4 from "../Text4";
import "./ColumnHeader6.css";

function ColumnHeader6(props) {
  const { className, text4Props } = props;

  return (
    <div className={`column-header-6 ${className || ""}`}>
      <Text4 className={text4Props.className}>{text4Props.children}</Text4>
    </div>
  );
}

export default ColumnHeader6;
