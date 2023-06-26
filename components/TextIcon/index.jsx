import React from "react";
import "./TextIcon.css";

function TextIcon(props) {
  const { className } = props;

  return (
    <div className={`text-icon-12 ${className || ""}`}>
      <div className="label-94 neuehaasgroteskdisplaystd-regular-normal-deep-cerulean-14px">0000675456-WD-FFC</div>
    </div>
  );
}

export default TextIcon;
