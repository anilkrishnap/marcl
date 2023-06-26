import React from "react";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import StatusIconBig3 from "../StatusIconBig3";
import TextIcon3 from "../TextIcon3";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text3 from "../Cell07Text3";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import "./TableRow5.css";

function TableRow5(props) {
  const { table22Props, statusIconBig3Props, textIcon3Props, cell05Text2Props, cell07Text3Props, dividerProps } = props;

  return (
    <div className="table-row-5">
      <div className="inputs-25">
        <img className="checkbox-25" src="/img/checkbox.svg" alt="Checkbox" />
        <div className="row-data-25">
          <Table22 src={table22Props.src} />
          <Table32 />
          <Cell03Text />
          <div className="table-72">
            <StatusIconBig3 className={statusIconBig3Props.className} />
            <TextIcon3>{textIcon3Props.children}</TextIcon3>
          </div>
          <Cell05Text2 className={cell05Text2Props.className} textIcon8Props={cell05Text2Props.textIcon8Props} />
          <Cell06Text22 />
          <Cell07Text3 textIcon32Props={cell07Text3Props.textIcon32Props} />
          <Table3 />
          <Table72 />
        </div>
      </div>
      <Divider className={dividerProps.className} />
    </div>
  );
}

export default TableRow5;
