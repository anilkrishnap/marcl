import React from "react";
import Frame183 from "../Frame183";
import "./SearchInput.css";

function SearchInput(props) {
  const { className, frame183Props } = props;

  return (
    <div className={`search-input ${className || ""}`}>
      <Frame183 icon22Props={frame183Props.icon22Props} />
      <div className="elements-12"></div>
    </div>
  );
}

export default SearchInput;
