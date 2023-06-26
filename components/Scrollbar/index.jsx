import React from "react";
import State from "../State";
import "./Scrollbar.css";

function Scrollbar(props) {
  const { stateProps } = props;

  return (
    <div className="scrollbar">
      <State className={stateProps.className} />
    </div>
  );
}

export default Scrollbar;
