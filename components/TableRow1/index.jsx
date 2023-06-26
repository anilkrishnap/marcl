import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Table2 from "../Table2";
import Table52 from "../Table52";
import Cell06Text22 from "../Cell06Text22";
import Table62 from "../Table62";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow1.css";

function TableRow1(props) {
  const { table22Props, table2Props, table52Props, table62Props, dividerProps } = props;

  return (
    <div className="table-row-1">
      <div className="inputs-5">
        <img className="checkbox-5" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-5">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Table2 textIcon3Props={table2Props.textIcon3Props} />
          <Table52 textIcon4Props={table52Props.textIcon4Props} />
          <Cell06Text22 />
          <Table62 textIcon3Props={table62Props.textIcon3Props} />
          <Table3 />
          <Table72 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow1;
