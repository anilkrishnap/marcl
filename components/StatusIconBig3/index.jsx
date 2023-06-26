import React from "react";
import "./StatusIconBig3.css";

function StatusIconBig3(props) {
  const { className } = props;

  return (
    <div className={`status-icon-big ${className || ""}`}>
      <div className="overlap-group-11">
        <div className="group-57">
          <img className="path-23" src="/img/path-3.svg" alt="Path" />
          <div className="rectangle-39"></div>
        </div>
      </div>
    </div>
  );
}

export default StatusIconBig3;
