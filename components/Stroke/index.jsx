import React from "react";
import TooltipTitle3 from "../TooltipTitle3";
import "./Stroke.css";

function Stroke(props) {
  const { textCopy, className, tooltipTitle3Props } = props;

  return (
    <div className={`stroke ${className || ""}`}>
      <div className="override-this">
        <TooltipTitle3>{tooltipTitle3Props.children}</TooltipTitle3>
        <div className="tooltip-description">
          <p className="text-copy neuehaasgroteskdisplaystd-regular-normal-black-11px">{textCopy}</p>
        </div>
      </div>
    </div>
  );
}

export default Stroke;
