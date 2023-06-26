import React from "react";
import "./ATOMSICON2019notification.css";

function ATOMSICON2019notification(props) {
  const { className } = props;

  return (
    <div className={`atomsicon2019notification ${className || ""}`}>
      <div className="group-22">
        <img className="shape" src="/img/shape-1.svg" alt="Shape" />
        <img className="path" src="/img/path.svg" alt="Path" />
      </div>
    </div>
  );
}

export default ATOMSICON2019notification;
