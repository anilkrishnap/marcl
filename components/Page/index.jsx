import React from "react";
import Pages from "../Pages";
import "./Page.css";

function Page(props) {
  const { pagesProps } = props;

  return (
    <div className="page">
      <Pages {...pagesProps} />
    </div>
  );
}

export default Page;
