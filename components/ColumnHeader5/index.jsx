import React from "react";
import "./ColumnHeader5.css";

function ColumnHeader5(props) {
  const { className } = props;

  return (
    <div className={`column-header-5 ${className || ""}`}>
      <div className="text-37">
        <div className="label-65 neuehaasgroteskdisplaystd-bold-black-14px">Time Left</div>
      </div>
    </div>
  );
}

export default ColumnHeader5;
