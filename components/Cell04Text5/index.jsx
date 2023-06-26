import React from "react";
import StatusIndicator5 from "../StatusIndicator5";
import "./Cell04Text5.css";

function Cell04Text5(props) {
  const { label, statusIndicator5Props } = props;

  return (
    <div className="cell-04-text-17">
      <div className="text-icon-96">
        <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
        <div className="label-212 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
      </div>
    </div>
  );
}

export default Cell04Text5;
