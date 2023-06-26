import React from "react";
import StatusIndicator22 from "../StatusIndicator22";
import "./Table5.css";

function Table5(props) {
  const { statusIndicator22Props } = props;

  return (
    <div className="table-86">
      <div className="text-icon-104">
        <StatusIndicator22 className={statusIndicator22Props.className} />
        <div className="label-229 neuehaasgroteskdisplaystd-regular-normal-black-14px">Initial Pending</div>
      </div>
    </div>
  );
}

export default Table5;
