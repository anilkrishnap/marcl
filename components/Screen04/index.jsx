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
import Table22 from "../Table22";
import Table32 from "../Table32";
import Cell03Text from "../Cell03Text";
import TextIcon3 from "../TextIcon3";
import Table52 from "../Table52";
import Cell06Text22 from "../Cell06Text22";
import Table62 from "../Table62";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow2 from "../TableRow2";
import TableRow3 from "../TableRow3";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import Stroke from "../Stroke";
import UserInteraction2 from "../UserInteraction2";
import "./Screen04.css";

function Screen04(props) {
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
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    icon32Props,
    searchInputProps,
    divider2Props,
    tableHeader2Props,
    table22Props,
    textIcon3Props,
    table52Props,
    table62Props,
    dividerProps,
    tableRow2Props,
    tableRow3Props,
    tableRow4Props,
    tableRow5Props,
    tableRow6Props,
    scrollbarProps,
    pagination3Props,
    strokeProps,
    userInteraction2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen04 screen">
        <div className="overlap-group3-8">
          <div className="dashview-9">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-9">
              <div className="tab-20">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-19">
                    <div className="item-name-34 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-19">
                    <div className="item-name-34 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-8">
              <Card7 />
              <Link to="/screen06">
                <div className="x-pending-5">
                  <div className="label-240 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-241 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-242 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/screen07">
                <div className="x-pending-5">
                  <div className="label-240 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-241 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-242 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/screen08">
                <div className="x-pending-5">
                  <div className="label-240 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-243 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-8 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-8 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-242 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/screen09">
                <div className="x-pending-5">
                  <div className="label-240 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-241 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-242 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-8">
              <div className="table-92">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <div className="action-bar-7">
                  <div className="overlap-group1-9">
                    <div className="setting-9">
                      <div className="template-9">
                        <Link to="/screen02">
                          <div className="dropdown-input-8">
                            <Frame182 />
                            <div className="elements-42"></div>
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
                <div className="table-row-1-4">
                  <div className="inputs-47">
                    <img className="checkbox-45" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-47">
                      <Table22 src={table22Props.src} />
                      <Table32 />
                      <Cell03Text />
                      <div className="table-93">
                        <Link to="/screen05">
                          <img className="notification-5" src="/img/notification-4.svg" alt="Notification" />
                        </Link>
                        <TextIcon3>{textIcon3Props.children}</TextIcon3>
                      </div>
                      <Table52 textIcon4Props={table52Props.textIcon4Props} />
                      <Cell06Text22 />
                      <Table62 textIcon3Props={table62Props.textIcon3Props} />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={dividerProps.className} />
                </div>
                <TableRow2
                  table22Props={tableRow2Props.table22Props}
                  cell04TextProps={tableRow2Props.cell04TextProps}
                  table52Props={tableRow2Props.table52Props}
                  cell06Text22Props={tableRow2Props.cell06Text22Props}
                  cell07Text2Props={tableRow2Props.cell07Text2Props}
                  dividerProps={tableRow2Props.dividerProps}
                />
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
          <div className="tooltip-1">
            <div className="overlap-group2-2">
              <Stroke
                textCopy={strokeProps.textCopy}
                className={strokeProps.className}
                tooltipTitle3Props={strokeProps.tooltipTitle3Props}
              />
              <img className="arrow-12" src="/img/arrow-1.svg" alt="Arrow" />
            </div>
          </div>
          <UserInteraction2 className={userInteraction2Props.className} />
        </div>
      </div>
    </div>
  );
}

export default Screen04;
