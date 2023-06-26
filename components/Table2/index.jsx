import React from "react";
import TextIcon3 from "../TextIcon3";
import "./Table2.css";

function Table2(props) {
  const { textIcon3Props } = props;

  return (
    <div className="table-23">
      <img className="notification" src="/img/notification.svg" alt="Notification" />
      <TextIcon3>{textIcon3Props.children}</TextIcon3>
    </div>
  );
}

export default Table2;
