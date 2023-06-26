import React from "react";
import "./UserInteraction2.css";

function UserInteraction2(props) {
  const { className } = props;

  return (
    <div className={`user-interaction-6 ${className || ""}`}>
      <img className="icon-filled-cursor-1" src="/img/icon---filled---cursor-1.svg" alt="Icon / Filled / Cursor" />
      <div className="hover-1 neuehaasgroteskdisplaystd-regular-normal-black-10px">HOVER</div>
    </div>
  );
}

export default UserInteraction2;
