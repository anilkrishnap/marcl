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
import TableRow2 from "../TableRow2";
import TableRow3 from "../TableRow3";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow6 from "../TableRow6";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import TooltipTitle3 from "../TooltipTitle3";
import UserInteraction from "../UserInteraction";
import "./Screen05.css";

function Screen05(props) {
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
    tableRow1Props,
    tableRow2Props,
    tableRow3Props,
    tableRow4Props,
    tableRow5Props,
    tableRow6Props,
    scrollbarProps,
    pagination3Props,
    tooltipTitle3Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen05 screen">
        <div className="overlap-group4-1">
          <div className="dashview-10">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-10">
              <div className="tab-21">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-20">
                    <div className="item-name-35 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-20">
                    <div className="item-name-35 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-9">
              <Card7 />
              <Link to="/screen06">
                <div className="x-pending-6">
                  <div className="label-244 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-245 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-246 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/screen07">
                <div className="x-pending-6">
                  <div className="label-244 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-245 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-246 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/screen08">
                <div className="x-pending-6">
                  <div className="label-244 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-247 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-9 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-9 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-246 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/screen09">
                <div className="x-pending-6">
                  <div className="label-244 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-245 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-246 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-9">
              <div className="table-94">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <div className="action-bar-8">
                  <div className="overlap-group1-10">
                    <div className="setting-10">
                      <div className="template-10">
                        <Link to="/screen02">
                          <div className="dropdown-input-9">
                            <Frame182 />
                            <div className="elements-43"></div>
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
          <div className="tooltip-2">
            <div className="overlap-group2-3">
              <img className="arrow-13" src="/img/arrow-2.svg" alt="Arrow" />
              <div className="stroke-2">
                <div className="override-this-2">
                  <TooltipTitle3 className={tooltipTitle3Props.className}>{tooltipTitle3Props.children}</TooltipTitle3>
                </div>
              </div>
            </div>
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Screen05;
