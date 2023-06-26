import React from "react";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import ColumnHeader from "../ColumnHeader";
import Text2 from "../Text2";
import Text3 from "../Text3";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader7 from "../ColumnHeader7";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import Cell02Text2 from "../Cell02Text2";
import Cell03Text3 from "../Cell03Text3";
import StatusIndicator5 from "../StatusIndicator5";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text22 from "../Cell07Text22";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import Table32 from "../Table32";
import Cell04Text4 from "../Cell04Text4";
import Table52 from "../Table52";
import Cell04Text5 from "../Cell04Text5";
import Cell05Text2 from "../Cell05Text2";
import Cell05Text7 from "../Cell05Text7";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import "./DashboardTable.css";

function DashboardTable(props) {
  const {
    label2,
    tableHeaderProps,
    actionBarProps,
    columnHeader5Props,
    columnHeader6Props,
    columnHeader7Props,
    divider2Props,
    table221Props,
    statusIndicator5Props,
    cell06Text221Props,
    cell07Text221Props,
    divider1Props,
    table222Props,
    table321Props,
    cell04Text41Props,
    table52Props,
    cell06Text222Props,
    cell07Text222Props,
    divider2Props2,
    table223Props,
    table322Props,
    cell04Text51Props,
    cell06Text223Props,
    cell07Text223Props,
    divider3Props,
    table224Props,
    table323Props,
    cell04Text52Props,
    cell06Text224Props,
    cell07Text224Props,
    divider4Props,
    table225Props,
    table324Props,
    cell04Text42Props,
    cell05Text2Props,
    cell06Text225Props,
    cell07Text225Props,
    divider5Props,
    table226Props,
    table325Props,
    cell04Text43Props,
    cell06Text226Props,
    cell07Text226Props,
    divider6Props,
    scrollbarProps,
    pagination3Props,
  } = props;

  return (
    <div className="dashboard-table-4">
      <div className="table-80">
        <TableHeader dividerProps={tableHeaderProps.dividerProps} dividerProps2={tableHeaderProps.dividerProps2} />
        <ActionBar
          icon32Props={actionBarProps.icon32Props}
          icon32Props2={actionBarProps.icon32Props2}
          divider2Props={actionBarProps.divider2Props}
        />
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <ColumnHeader />
              <div className="column-header-2-2">
                <Text2 />
              </div>
              <div className="column-header-3-6">
                <Text3 />
              </div>
              <div className="column-header-4-8">
                <div className="text-76">
                  <div className="label-204 neuehaasgroteskdisplaystd-bold-black-14px">Status</div>
                </div>
              </div>
              <ColumnHeader5 className={columnHeader5Props.className} />
              <ColumnHeader6 className={columnHeader6Props.className} text4Props={columnHeader6Props.text4Props} />
              <ColumnHeader7 className={columnHeader7Props.className} />
              <ColumnHeader8 />
              <ColumnHeader9 />
            </div>
          </div>
          <Divider2 className={divider2Props.className} />
        </div>
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <Table22 src={table221Props.src} />
              <Cell02Text2 />
              <Cell03Text3 />
              <div className="cell-04-text-13">
                <div className="text-icon-92">
                  <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
                  <div className="label-204 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label2}</div>
                </div>
              </div>
              <div className="cell-05-text-25">
                <div className="text-icon-90">
                  <div className="label-208 neuehaasgroteskdisplaystd-regular-normal-black-14px">25 Days</div>
                </div>
              </div>
              <Cell06Text22 className={cell06Text221Props.className} />
              <Cell07Text22 textIcon3Props={cell07Text221Props.textIcon3Props} />
              <Table3 />
              <Table72 />
            </div>
          </div>
          <Divider className={divider1Props.className} />
        </div>
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <Table22 src={table222Props.src} />
              <Table32 className={table321Props.className} />
              <Cell03Text3 />
              <Cell04Text4 label={cell04Text41Props.label} />
              <Table52 className={table52Props.className} textIcon4Props={table52Props.textIcon4Props} />
              <Cell06Text22 className={cell06Text222Props.className} />
              <Cell07Text22 textIcon3Props={cell07Text222Props.textIcon3Props} />
              <Table3 />
              <Table72 />
            </div>
          </div>
          <Divider className={divider2Props2.className} />
        </div>
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <Table22 src={table223Props.src} />
              <Table32 className={table322Props.className} />
              <Cell03Text3 />
              <Cell04Text5
                label={cell04Text51Props.label}
                statusIndicator5Props={cell04Text51Props.statusIndicator5Props}
              />
              <div className="cell-05-text-26">
                <div className="text-icon-90">
                  <div className="label-205 neuehaasgroteskdisplaystd-regular-normal-black-14px">10 Days</div>
                </div>
              </div>
              <Cell06Text22 className={cell06Text223Props.className} />
              <Cell07Text22 textIcon3Props={cell07Text223Props.textIcon3Props} />
              <Table3 />
              <Table72 />
            </div>
          </div>
          <Divider className={divider3Props.className} />
        </div>
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <Table22 src={table224Props.src} />
              <Table32 className={table323Props.className} />
              <Cell03Text3 />
              <Cell04Text5
                label={cell04Text52Props.label}
                statusIndicator5Props={cell04Text52Props.statusIndicator5Props}
              />
              <div className="cell-05-text-27">
                <div className="text-icon-90">
                  <div className="label-205 neuehaasgroteskdisplaystd-regular-normal-black-14px">15 Days</div>
                </div>
              </div>
              <Cell06Text22 className={cell06Text224Props.className} />
              <Cell07Text22 textIcon3Props={cell07Text224Props.textIcon3Props} />
              <Table3 />
              <Table72 />
            </div>
          </div>
          <Divider className={divider4Props.className} />
        </div>
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <Table22 src={table225Props.src} />
              <Table32 className={table324Props.className} />
              <Cell03Text3 />
              <Cell04Text4 label={cell04Text42Props.label} />
              <Cell05Text2 className={cell05Text2Props.className} textIcon8Props={cell05Text2Props.textIcon8Props} />
              <Cell06Text22 className={cell06Text225Props.className} />
              <Cell07Text22 textIcon3Props={cell07Text225Props.textIcon3Props} />
              <Table3 />
              <Table72 />
            </div>
          </div>
          <Divider className={divider5Props.className} />
        </div>
        <div className="table-row-9">
          <div className="inputs-40">
            <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
            <div className="row-data-40">
              <Table22 src={table226Props.src} />
              <Table32 className={table325Props.className} />
              <Cell03Text3 />
              <Cell04Text4 label={cell04Text43Props.label} />
              <Cell05Text7 />
              <Cell06Text22 className={cell06Text226Props.className} />
              <Cell07Text22 textIcon3Props={cell07Text226Props.textIcon3Props} />
              <Table3 />
              <Table72 />
            </div>
          </div>
          <Divider className={divider6Props.className} />
        </div>
        <Scrollbar stateProps={scrollbarProps.stateProps} />
        <Pagination3
          showPageProps={pagination3Props.showPageProps}
          pagesProps={pagination3Props.pagesProps}
          goToProps2={pagination3Props.goToProps2}
        />
      </div>
    </div>
  );
}

export default DashboardTable;
