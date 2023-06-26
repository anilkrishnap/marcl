import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import Text from "../Text";
import ColumnHeader2 from "../ColumnHeader2";
import Text3 from "../Text3";
import ColumnHeader8 from "../ColumnHeader8";
import Divider2 from "../Divider2";
import Cell01Text from "../Cell01Text";
import Table32 from "../Table32";
import Cell03Text2 from "../Cell03Text2";
import Cell04Text3 from "../Cell04Text3";
import Cell05Text3 from "../Cell05Text3";
import Cell06Text2 from "../Cell06Text2";
import Cell07Text4 from "../Cell07Text4";
import Table3 from "../Table3";
import Divider from "../Divider";
import TableRow22 from "../TableRow22";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import "./Screen11.css";

function Screen11(props) {
  const {
    itemName1,
    itemName2,
    itemName3,
    label1,
    label2,
    label3,
    label4,
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    actionBarProps,
    columnHeader2Props,
    divider2Props,
    table32Props,
    cell04Text3Props,
    cell06Text2Props,
    cell07Text4Props,
    dividerProps,
    tableRow221Props,
    tableRow222Props,
    tableRow223Props,
    tableRow224Props,
    tableRow225Props,
    scrollbarProps,
    pagination3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen11 screen">
        <div className="dashview-1">
          <Header
            menuLogoProps={headerProps.menuLogoProps}
            frame18Props={headerProps.frame18Props}
            aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
            aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
            aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
          />
          <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
          <div className="tabs-1">
            <div className="tab-12">
              <Link to="/screen01">
                <div className="tab-items-1-10">
                  <div className="item-name-21 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                </div>
              </Link>
              <Link to="/screen09">
                <div className="tab-items-2-1">
                  <div className="item-name-22 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                </div>
              </Link>
              <div className="tab-items-3-1">
                <div className="item-name-23 neuehaasgroteskdisplaystd-bold-black-14px">{itemName3}</div>
                <div className="bar-20"></div>
              </div>
            </div>
          </div>
          <div className="dashboard-table-1">
            <div className="table-77">
              <TableHeader
                dividerProps={tableHeaderProps.dividerProps}
                dividerProps2={tableHeaderProps.dividerProps2}
              />
              <ActionBar
                icon32Props={actionBarProps.icon32Props}
                icon32Props2={actionBarProps.icon32Props2}
                divider2Props={actionBarProps.divider2Props}
              />
              <div className="table-row">
                <div className="inputs-36">
                  <div className="row-data-36">
                    <div className="column-header-1-10">
                      <Text />
                    </div>
                    <ColumnHeader2 className={columnHeader2Props.className} />
                    <div className="column-header">
                      <Text3 />
                    </div>
                    <div className="column-header-4-7">
                      <div className="text-71">
                        <div className="label-177 neuehaasgroteskdisplaystd-bold-black-14px">{label1}</div>
                      </div>
                    </div>
                    <div className="column-header-5-2">
                      <div className="text-72">
                        <div className="label-177 neuehaasgroteskdisplaystd-bold-black-14px">{label2}</div>
                      </div>
                    </div>
                    <div className="column-header">
                      <div className="text-70">
                        <div className="label-178 neuehaasgroteskdisplaystd-bold-black-14px">{label3}</div>
                      </div>
                    </div>
                    <div className="column-header-7-1">
                      <div className="text-70">
                        <div className="label-179 neuehaasgroteskdisplaystd-bold-black-14px">{label4}</div>
                      </div>
                    </div>
                    <ColumnHeader8 />
                  </div>
                </div>
                <Divider2 className={divider2Props.className} />
              </div>
              <div className="table-row">
                <div className="inputs-36">
                  <div className="row-data-36">
                    <Cell01Text />
                    <Table32 className={table32Props.className} />
                    <Cell03Text2 />
                    <Cell04Text3 statusIndicator5Props={cell04Text3Props.statusIndicator5Props} />
                    <Cell05Text3 />
                    <Cell06Text2 textIcon9Props={cell06Text2Props.textIcon9Props} />
                    <Cell07Text4 textIcon33Props={cell07Text4Props.textIcon33Props} />
                    <Table3 />
                  </div>
                </div>
                <Divider className={dividerProps.className} />
              </div>
              <TableRow22
                table32Props={tableRow221Props.table32Props}
                cell04Text3Props={tableRow221Props.cell04Text3Props}
                cell06Text2Props={tableRow221Props.cell06Text2Props}
                cell07Text4Props={tableRow221Props.cell07Text4Props}
                dividerProps={tableRow221Props.dividerProps}
              />
              <TableRow22
                table32Props={tableRow222Props.table32Props}
                cell04Text3Props={tableRow222Props.cell04Text3Props}
                cell06Text2Props={tableRow222Props.cell06Text2Props}
                cell07Text4Props={tableRow222Props.cell07Text4Props}
                dividerProps={tableRow222Props.dividerProps}
              />
              <TableRow22
                table32Props={tableRow223Props.table32Props}
                cell04Text3Props={tableRow223Props.cell04Text3Props}
                cell06Text2Props={tableRow223Props.cell06Text2Props}
                cell07Text4Props={tableRow223Props.cell07Text4Props}
                dividerProps={tableRow223Props.dividerProps}
              />
              <TableRow22
                table32Props={tableRow224Props.table32Props}
                cell04Text3Props={tableRow224Props.cell04Text3Props}
                cell06Text2Props={tableRow224Props.cell06Text2Props}
                cell07Text4Props={tableRow224Props.cell07Text4Props}
                dividerProps={tableRow224Props.dividerProps}
              />
              <TableRow22
                table32Props={tableRow225Props.table32Props}
                cell04Text3Props={tableRow225Props.cell04Text3Props}
                cell06Text2Props={tableRow225Props.cell06Text2Props}
                cell07Text4Props={tableRow225Props.cell07Text4Props}
                dividerProps={tableRow225Props.dividerProps}
              />
              <Scrollbar stateProps={scrollbarProps.stateProps} />
              <Pagination3
                showPageProps={pagination3Props.showPageProps}
                pagesProps={pagination3Props.pagesProps}
                goToProps2={pagination3Props.goToProps2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen11;
