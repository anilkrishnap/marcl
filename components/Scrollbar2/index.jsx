import React from "react";
import State from "../State";
import "./Scrollbar2.css";

function Scrollbar2(props) {
  const { stateProps } = props;

  return (
    <div className="scrollbar-11">
      <State className={stateProps.className} />
    </div>
  );
}

export default Scrollbar2;
