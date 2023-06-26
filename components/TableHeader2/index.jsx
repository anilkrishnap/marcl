import React from "react";
import ColumnHeader from "../ColumnHeader";
import ColumnHeader2 from "../ColumnHeader2";
import ColumnHeader3 from "../ColumnHeader3";
import ColumnHeader4 from "../ColumnHeader4";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader7 from "../ColumnHeader7";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import "./TableHeader2.css";

function TableHeader2(props) {
  const { columnHeader25Props, divider2Props } = props;

  return (
    <div className="table-row-headers">
      <div className="inputs">
        <img className="checkbox" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data">
          <ColumnHeader />
          <ColumnHeader2 />
          <ColumnHeader3 />
          <ColumnHeader4 />
          <ColumnHeader5 />
          <ColumnHeader6 text4Props={columnHeader25Props.text4Props} />
          <ColumnHeader7 />
          <ColumnHeader8 />
          <ColumnHeader9 />
        </div>
      </div>
      <Divider2 className={divider2Props.className} />
    </div>
  );
}

export default TableHeader2;
