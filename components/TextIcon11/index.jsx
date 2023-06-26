import React from "react";
import StatusIndicator5 from "../StatusIndicator5";
import "./TextIcon11.css";

function TextIcon11(props) {
  const { label, statusIndicator5Props } = props;

  return (
    <div className="text-icon-106">
      <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
      <div className="label-235 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
    </div>
  );
}

export default TextIcon11;
