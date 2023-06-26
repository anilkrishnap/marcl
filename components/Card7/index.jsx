import React from "react";
import "./Card7.css";

function Card7(props) {
  const { className } = props;

  return (
    <div className={`all-reports-a ${className || ""}`}>
      <div className="label-4 neuehaasgroteskdisplaystd-regular-normal-white-lilac-14px">All</div>
      <div className="label-5 neuehaasgroteskdisplaystd-bold-white-lilac-24px">104</div>
      <div className="label-6 neuehaasgroteskdisplaystd-bold-terracotta-12px"></div>
    </div>
  );
}

export default Card7;
