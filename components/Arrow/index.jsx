import React from "react";
import "./Arrow.css";

function Arrow(props) {
  const { atomsIcon2019Close1, atomsIcon2019Close2 } = props;

  return (
    <div className="arrow">
      <img className="atomsicon2019close-33" src={atomsIcon2019Close1} alt="ATOMS/ICON/2019/close" />
      <div className="divider-44"></div>
      <img className="atomsicon2019close-33" src={atomsIcon2019Close2} alt="ATOMS/ICON/2019/close" />
    </div>
  );
}

export default Arrow;
