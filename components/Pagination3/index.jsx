import React from "react";
import Information from "../Information";
import Page from "../Page";
import GoTo from "../GoTo";
import Button from "../Button";
import "./Pagination3.css";

function Pagination3(props) {
  const { showPageProps, pagesProps, goToProps2 } = props;

  return (
    <div className="pagination">
      <Information showPageProps={showPageProps.showPageProps} />
      <Page pagesProps={pagesProps.pagesProps} />
      <GoTo />
      <Button dropdownProps={goToProps2.dropdownProps} />
    </div>
  );
}

export default Pagination3;
