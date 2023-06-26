import React from "react";
import StatusIndicator5 from "../StatusIndicator5";
import "./Cell04Text3.css";

function Cell04Text3(props) {
  const { className, statusIndicator5Props } = props;

  return (
    <div className={`cell-04-text-12-1 ${className || ""}`}>
      <div className="text-icon-88">
        <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
        <div className="label-181 neuehaasgroteskdisplaystd-regular-normal-black-14px">Submitted</div>
      </div>
    </div>
  );
}

export default Cell04Text3;
