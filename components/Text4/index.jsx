import React from "react";
import "./Text4.css";

function Text4(props) {
  const { children, className } = props;

  return (
    <div className={`text-47 ${className || ""}`}>
      <div className="label-75 neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
    </div>
  );
}

export default Text4;
