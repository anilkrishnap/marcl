import React from "react";
import Table22 from "../Table22";
import Cell02Text3 from "../Cell02Text3";
import Cell03Text4 from "../Cell03Text4";
import Table5 from "../Table5";
import Cell05Text7 from "../Cell05Text7";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text7 from "../Cell07Text7";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow23.css";

function TableRow23(props) {
  const { table22Props, table5Props, cell06Text22Props, cell07Text7Props, dividerProps } = props;

  return (
    <div className="table-row-12">
      <div className="inputs-43">
        <img className="checkbox-41" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-43">
          <Table22 src={table22Props.src} />
          <Cell02Text3 />
          <Cell03Text4 />
          <Table5 statusIndicator22Props={table5Props.statusIndicator22Props} />
          <Cell05Text7 />
          <Cell06Text22 className={cell06Text22Props.className} />
          <Cell07Text7 textIcon33Props={cell07Text7Props.textIcon33Props} />
          <Table3 />
          <Table72 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow23;
