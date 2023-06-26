import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import Cards3 from "../Cards3";
import TableHeader from "../TableHeader";
import Frame182 from "../Frame182";
import Icon32 from "../Icon32";
import SearchInput from "../SearchInput";
import Icon42 from "../Icon42";
import Icon52 from "../Icon52";
import Divider2 from "../Divider2";
import ColumnHeader from "../ColumnHeader";
import ColumnHeader2 from "../ColumnHeader2";
import ColumnHeader3 from "../ColumnHeader3";
import ColumnHeader4 from "../ColumnHeader4";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Table2 from "../Table2";
import Table52 from "../Table52";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text3 from "../Cell07Text3";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow2 from "../TableRow2";
import Cell04Text2 from "../Cell04Text2";
import Cell05Text2 from "../Cell05Text2";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import UserInteraction from "../UserInteraction";
import "./Screen10.css";

function Screen10(props) {
  const {
    itemName1,
    itemName2,
    itemName3,
    label,
    headerProps,
    pageHeading3Props,
    cards3Props,
    tableHeaderProps,
    icon32Props,
    searchInputProps,
    divider21Props,
    columnHeader6Props,
    divider22Props,
    table221Props,
    table2Props,
    table52Props,
    cell07Text31Props,
    divider1Props,
    tableRow2Props,
    table222Props,
    cell04Text2Props,
    cell05Text2Props,
    cell07Text32Props,
    divider2Props,
    tableRow4Props,
    tableRow5Props,
    tableRow6Props,
    scrollbarProps,
    pagination3Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen10 screen">
        <div className="overlap-group3-2">
          <div className="dashview-3">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-3">
              <div className="tab-14">
                <Link to="/screen01">
                  <div className="tab-items-1-11">
                    <div className="item-name-25 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <div className="tab-items-13">
                  <div className="item-name-26 neuehaasgroteskdisplaystd-bold-black-14px">{itemName2}</div>
                  <div className="bar-21"></div>
                </div>
                <div className="tab-items-13">
                  <Link to="/screen11">
                    <div className="item-name-27 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName3}</div>
                  </Link>
                </div>
              </div>
            </div>
            <Cards3 card31Props={cards3Props.card31Props} card32Props={cards3Props.card32Props} />
            <div className="dashboard-table-3">
              <div className="table-79">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <div className="action-bar-5">
                  <div className="overlap-group1-7">
                    <div className="setting-7">
                      <div className="template-7">
                        <Link to="/screen02">
                          <div className="dropdown-input-6">
                            <Frame182 />
                            <div className="elements-39"></div>
                          </div>
                        </Link>
                        <Icon32 saveGridSettingsProps={icon32Props.saveGridSettingsProps} />
                      </div>
                      <SearchInput frame183Props={searchInputProps.frame183Props} />
                      <Icon42 />
                      <Icon52 />
                    </div>
                    <Divider2 className={divider21Props.className} />
                  </div>
                </div>
                <div className="table-row-headers-5">
                  <div className="inputs-39">
                    <img className="checkbox-37" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-39">
                      <ColumnHeader />
                      <ColumnHeader2 />
                      <ColumnHeader3 />
                      <ColumnHeader4 />
                      <ColumnHeader5 />
                      <ColumnHeader6 text4Props={columnHeader6Props.text4Props} />
                      <div className="column-header-7-5">
                        <div className="text-75">
                          <div className="label-187 neuehaasgroteskdisplaystd-bold-black-14px">{label}</div>
                        </div>
                      </div>
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider22Props.className} />
                </div>
                <div className="table-row-8">
                  <div className="inputs-39">
                    <img className="checkbox-37" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-39">
                      <Table22 src={table221Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <Table2 textIcon3Props={table2Props.textIcon3Props} />
                      <Table52 textIcon4Props={table52Props.textIcon4Props} />
                      <Cell06Text22 />
                      <Cell07Text3
                        className={cell07Text31Props.className}
                        textIcon32Props={cell07Text31Props.textIcon32Props}
                      />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <TableRow2
                  table22Props={tableRow2Props.table22Props}
                  cell04TextProps={tableRow2Props.cell04TextProps}
                  table52Props={tableRow2Props.table52Props}
                  cell06Text22Props={tableRow2Props.cell06Text22Props}
                  cell07Text2Props={tableRow2Props.cell07Text2Props}
                  dividerProps={tableRow2Props.dividerProps}
                />
                <div className="table-row-8">
                  <div className="inputs-39">
                    <img className="checkbox-37" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-39">
                      <Table22 src={table222Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <Cell04Text2
                        label={cell04Text2Props.label}
                        statusIndicator5Props={cell04Text2Props.statusIndicator5Props}
                      />
                      <Cell05Text2 textIcon8Props={cell05Text2Props.textIcon8Props} />
                      <Cell06Text22 />
                      <Cell07Text3
                        className={cell07Text32Props.className}
                        textIcon32Props={cell07Text32Props.textIcon32Props}
                      />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider2Props.className} />
                </div>
                <TableRow4
                  table22Props={tableRow4Props.table22Props}
                  cell04Text2Props={tableRow4Props.cell04Text2Props}
                  cell05Text2Props={tableRow4Props.cell05Text2Props}
                  cell06Text22Props={tableRow4Props.cell06Text22Props}
                  cell07Text2Props={tableRow4Props.cell07Text2Props}
                  dividerProps={tableRow4Props.dividerProps}
                />
                <TableRow5
                  table22Props={tableRow5Props.table22Props}
                  statusIconBig3Props={tableRow5Props.statusIconBig3Props}
                  textIcon3Props={tableRow5Props.textIcon3Props}
                  cell05Text2Props={tableRow5Props.cell05Text2Props}
                  cell07Text3Props={tableRow5Props.cell07Text3Props}
                  dividerProps={tableRow5Props.dividerProps}
                />
                <TableRow6
                  table22Props={tableRow6Props.table22Props}
                  cell04TextProps={tableRow6Props.cell04TextProps}
                  cell05Text2Props={tableRow6Props.cell05Text2Props}
                  cell06Text22Props={tableRow6Props.cell06Text22Props}
                  cell07Text2Props={tableRow6Props.cell07Text2Props}
                  dividerProps={tableRow6Props.dividerProps}
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
          <UserInteraction click2={userInteractionProps.click2} />
        </div>
      </div>
    </div>
  );
}

export default Screen10;
