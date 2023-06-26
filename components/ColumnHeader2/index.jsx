import React from "react";
import Text2 from "../Text2";
import "./ColumnHeader2.css";

function ColumnHeader2(props) {
  const { className } = props;

  return (
    <div className={`column-header-2 ${className || ""}`}>
      <Text2 />
    </div>
  );
}

export default ColumnHeader2;
