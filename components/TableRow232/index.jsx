import React from "react";
import Table22 from "../Table22";
import Cell02Text5 from "../Cell02Text5";
import Cell04Text8 from "../Cell04Text8";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text3 from "../Cell06Text3";
import Cell07Text5 from "../Cell07Text5";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow232.css";

function TableRow232(props) {
  const {
    table22Props,
    cell02Text5Props,
    cell04Text8Props,
    cell05Text2Props,
    cell05Text2Props2,
    cell07Text5Props,
    dividerProps,
  } = props;

  return (
    <div className="table-row-15">
      <div className="inputs-45">
        <img className="checkbox-43" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-45">
          <Table22 src={table22Props.src} />
          <Cell02Text5 className={cell02Text5Props.className} textIconProps={cell02Text5Props.textIconProps} />
          <Cell04Text8 textIcon11Props={cell04Text8Props.textIcon11Props} />
          <Cell05Text2 className={cell05Text2Props.className} textIcon8Props={cell05Text2Props.textIcon8Props} />
          <Cell06Text3 className={cell05Text2Props2.className} />
          <Cell07Text5 textIcon3Props={cell07Text5Props.textIcon3Props} />
          <Table3 />
          <Table72 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow232;
