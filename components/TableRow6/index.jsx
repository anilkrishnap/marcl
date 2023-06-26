import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Cell04Text from "../Cell04Text";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text2 from "../Cell07Text2";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow6.css";

function TableRow6(props) {
  const { table22Props, cell04TextProps, cell05Text2Props, cell06Text22Props, cell07Text2Props, dividerProps } = props;

  return (
    <div className="table-row-6">
      <div className="inputs-30">
        <img className="checkbox-30" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-30">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <Cell04Text label={cell04TextProps.label} />
          <Cell05Text2 className={cell05Text2Props.className} textIcon8Props={cell05Text2Props.textIcon8Props} />
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

export default TableRow6;
