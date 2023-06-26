import React from "react";
import State from "../State";
import "./StatusIndicator5.css";

function StatusIndicator5(props) {
  const { stateProps } = props;

  return (
    <div className="status-indicator">
      <State className={stateProps.className} />
    </div>
  );
}

export default StatusIndicator5;
