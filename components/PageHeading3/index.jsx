import React from "react";
import Divider from "../Divider";
import "./PageHeading3.css";

function PageHeading3(props) {
  const { dividerProps } = props;

  return (
    <div className="page-heading">
      <div className="frame-1">
        <h1 className="placeholder-text-11 neuehaasgroteskdisplaystd-bold-black-24px">Wireless Dashboard</h1>
        <div className="actions"></div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default PageHeading3;
