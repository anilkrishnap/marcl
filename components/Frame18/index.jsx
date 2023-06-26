import React from "react";
import Icon22 from "../Icon22";
import "./Frame18.css";

function Frame18(props) {
  const { icon22Props } = props;

  return (
    <div className="frame-18">
      <div className="frame-32">
        <div className="placeholder-text neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">Search</div>
      </div>
      <Icon22 src={icon22Props.src} className={icon22Props.className} />
    </div>
  );
}

export default Frame18;
