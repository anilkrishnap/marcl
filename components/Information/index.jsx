import React from "react";
import ShowPage from "../ShowPage";
import "./Information.css";

function Information(props) {
  const { showPageProps } = props;

  return (
    <div className="information">
      <ShowPage inputFieldsProps={showPageProps.inputFieldsProps} />
      <p className="displaying-5-of-50-rows neuehaasgroteskdisplaystd-regular-normal-black-14px">
        Displaying 5 of 50 Rows
      </p>
    </div>
  );
}

export default Information;
