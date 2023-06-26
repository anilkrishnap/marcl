import React from "react";
import "./TooltipTitle3.css";

function TooltipTitle3(props) {
  const { children, className } = props;

  return (
    <div className={`tooltip-title ${className || ""}`}>
      <p className="text-80 neuehaasgroteskdisplaystd-bold-black-12px">{children}</p>
    </div>
  );
}

export default TooltipTitle3;
