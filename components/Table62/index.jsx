import React from "react";
import TextIcon32 from "../TextIcon32";
import "./Table62.css";

function Table62(props) {
  const { textIcon3Props } = props;

  return (
    <div className="cell-07-text">
      <TextIcon32>{textIcon3Props.children}</TextIcon32>
    </div>
  );
}

export default Table62;
