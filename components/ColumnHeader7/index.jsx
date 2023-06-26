import React from "react";
import Text5 from "../Text5";
import "./ColumnHeader7.css";

function ColumnHeader7(props) {
  const { className } = props;

  return (
    <div className={`column-header-7 ${className || ""}`}>
      <Text5 />
    </div>
  );
}

export default ColumnHeader7;
