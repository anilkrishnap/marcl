import React from "react";
import Cell01Text from "../Cell01Text";
import Table32 from "../Table32";
import Cell03Text2 from "../Cell03Text2";
import Cell04Text3 from "../Cell04Text3";
import Cell05Text3 from "../Cell05Text3";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text4 from "../Cell07Text4";
import Table3 from "../Table3";
import Divider from "../Divider";
import "./TableRow22.css";

function TableRow22(props) {
  const { table32Props, cell04Text3Props, cell06Text2Props, cell07Text4Props, dividerProps } = props;

  return (
    <div className="table-row-7">
      <div className="inputs-37">
        <div className="row-data-37">
          <Cell01Text />
          <Table32 className={table32Props.className} />
          <Cell03Text2 />
          <Cell04Text3
            className={cell04Text3Props.className}
            statusIndicator5Props={cell04Text3Props.statusIndicator5Props}
          />
          <Cell05Text3 />
          <Cell06Text2 textIcon9Props={cell06Text2Props.textIcon9Props} />
          <Cell07Text4 textIcon33Props={cell07Text4Props.textIcon33Props} />
          <Table3 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow22;
