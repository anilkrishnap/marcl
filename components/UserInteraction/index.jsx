import React from "react";
import "./UserInteraction.css";

function UserInteraction(props) {
  const { click2, className } = props;

  return (
    <div className={`user-interaction ${className || ""}`}>
      <div className="click-container-1">
        <img className="click-2" src="/img/click-1.svg" alt="Click" />
        <div className="click-3 neuehaasgroteskdisplaystd-regular-normal-black-10px">{click2}</div>
      </div>
    </div>
  );
}

export default UserInteraction;
