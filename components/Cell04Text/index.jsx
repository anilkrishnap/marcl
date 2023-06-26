import React from "react";
import State from "../State";
import "./Cell04Text.css";

function Cell04Text(props) {
  const { label } = props;

  return (
    <div className="cell-04-text">
      <div className="text-icon-54">
        <State />
        <div className="label-145 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
      </div>
    </div>
  );
}

export default Cell04Text;
