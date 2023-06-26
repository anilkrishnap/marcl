import React from "react";
import State from "../State";
import "./Cell04Text4.css";

function Cell04Text4(props) {
  const { label } = props;

  return (
    <div className="cell-04-text-15">
      <div className="text-icon-94">
        <State />
        <div className="label-210 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
      </div>
    </div>
  );
}

export default Cell04Text4;
