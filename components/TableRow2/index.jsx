import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Cell04Text from "../Cell04Text";
import Table52 from "../Table52";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text2 from "../Cell07Text2";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow2.css";

function TableRow2(props) {
  const { table22Props, cell04TextProps, table52Props, cell06Text22Props, cell07Text2Props, dividerProps } = props;

  return (
    <div className="table-row-2">
      <div className="inputs-9">
        <img className="checkbox-9" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-9">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Cell04Text label={cell04TextProps.label} />
          <Table52 textIcon4Props={table52Props.textIcon4Props} />
          <Cell06Text22 className={cell06Text22Props.className} />
          <Cell07Text2 textIcon33Props={cell07Text2Props.textIcon33Props} />
          <Table3 />
          <Table72 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow2;
