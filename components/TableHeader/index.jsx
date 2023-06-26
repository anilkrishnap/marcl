import React from "react";
import Divider from "../Divider";
import Divider2 from "../Divider2";
import "./TableHeader.css";

function TableHeader(props) {
  const { dividerProps, dividerProps2 } = props;

  return (
    <div className="table-title">
      <Divider className={dividerProps.className} />
      <div className="title">
        <div className="placeholder-text-22 neuehaasgroteskdisplaystd-bold-black-20px">All Reports</div>
      </div>
      <Divider2 className={dividerProps2.className} />
    </div>
  );
}

export default TableHeader;
