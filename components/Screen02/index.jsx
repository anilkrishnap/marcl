import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card7 from "../Card7";
import TableHeader from "../TableHeader";
import Frame182 from "../Frame182";
import Icon32 from "../Icon32";
import SearchInput from "../SearchInput";
import Icon42 from "../Icon42";
import Icon52 from "../Icon52";
import Divider2 from "../Divider2";
import TableHeader2 from "../TableHeader2";
import TableRow1 from "../TableRow1";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import Cell04Text from "../Cell04Text";
import Table52 from "../Table52";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text2 from "../Cell07Text2";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow3 from "../TableRow3";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import Dropdown3 from "../Dropdown3";
import "./Screen02.css";

function Screen02(props) {
  const {
    itemName1,
    itemName2,
    label1,
    label2,
    label3,
    label4,
    label5,
    label6,
    label7,
    spanText1,
    spanText2,
    label8,
    label9,
    label10,
    label11,
    hover,
    inputField1,
    inputField2,
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    icon32Props,
    searchInputProps,
    divider2Props,
    tableHeader2Props,
    tableRow1Props,
    cell04TextProps,
    table52Props,
    cell06Text22Props,
    cell07Text2Props,
    dividerProps,
    tableRow3Props,
    tableRow4Props,
    tableRow5Props,
    tableRow6Props,
    scrollbarProps,
    pagination3Props,
    dropdown3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen02 screen">
        <div className="overlap-group3-1">
          <div className="dashview-2">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-2">
              <div className="tab-13">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-12">
                    <div className="item-name-24 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-12">
                    <div className="item-name-24 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-1">
              <Card7 />
              <Link to="/screen06">
                <div className="x-pending-1">
                  <div className="label-183 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-184 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-185 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/screen07">
                <div className="x-pending-1">
                  <div className="label-183 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-184 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-185 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/screen08">
                <div className="x-pending-1">
                  <div className="label-183 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-186 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-1 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-1 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-185 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/screen09">
                <div className="x-pending-1">
                  <div className="label-183 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-184 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-185 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-2">
              <div className="table-78">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <div className="action-bar-3">
                  <div className="overlap-group1-6">
                    <div className="setting-6">
                      <div className="template-6">
                        <Link to="/screen02">
                          <div className="dropdown-input-4">
                            <Frame182 />
                            <div className="elements-38"></div>
                          </div>
                        </Link>
                        <Icon32 saveGridSettingsProps={icon32Props.saveGridSettingsProps} />
                      </div>
                      <SearchInput frame183Props={searchInputProps.frame183Props} />
                      <Icon42 />
                      <Icon52 />
                    </div>
                    <Divider2 className={divider2Props.className} />
                  </div>
                </div>
                <TableHeader2
                  columnHeader25Props={tableHeader2Props.columnHeader25Props}
                  divider2Props={tableHeader2Props.divider2Props}
                />
                <TableRow1
                  table22Props={tableRow1Props.table22Props}
                  table2Props={tableRow1Props.table2Props}
                  table52Props={tableRow1Props.table52Props}
                  table62Props={tableRow1Props.table62Props}
                  dividerProps={tableRow1Props.dividerProps}
                />
                <div className="table-row-2-5">
                  <div className="inputs-38">
                    <img className="checkbox-36" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-38">
                      <Link to="/screen03">
                        <div className="cell-01-text-23">
                          <img className="icon-64" src="/img/icon-14.svg" alt="Icon" />
                        </div>
                      </Link>
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
                <TableRow3
                  table22Props={tableRow3Props.table22Props}
                  cell04Text2Props={tableRow3Props.cell04Text2Props}
                  cell05Text2Props={tableRow3Props.cell05Text2Props}
                  table62Props={tableRow3Props.table62Props}
                  dividerProps={tableRow3Props.dividerProps}
                />
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
          <div className="group-217">
            <img className="icon-filled-cursor" src="/img/icon---filled---cursor.svg" alt="Icon / Filled / Cursor" />
            <div className="hover neuehaasgroteskdisplaystd-regular-normal-black-10px">{hover}</div>
          </div>
          <div className="overlap-group2">
            <Dropdown3
              dropdownMenu1Props={dropdown3Props.dropdownMenu1Props}
              dropdownMenu2Props={dropdown3Props.dropdownMenu2Props}
              dropdownMenu3Props={dropdown3Props.dropdownMenu3Props}
              dropdownMenu4Props={dropdown3Props.dropdownMenu4Props}
              dropdownMenu2Props2={dropdown3Props.dropdownMenu2Props2}
              dropdownMenu5Props={dropdown3Props.dropdownMenu5Props}
              scrollbar2Props={dropdown3Props.scrollbar2Props}
            />
            <img className="input-field" src={inputField1} alt="Input Field" />
            <img className="input-field-1" src={inputField2} alt="Input Field" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen02;
