import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card7 from "../Card7";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import ColumnHeader from "../ColumnHeader";
import Text2 from "../Text2";
import ColumnHeader6 from "../ColumnHeader6";
import ColumnHeader5 from "../ColumnHeader5";
import ColumnHeader7 from "../ColumnHeader7";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import Cell02Text3 from "../Cell02Text3";
import Cell03Text4 from "../Cell03Text4";
import State from "../State";
import Cell05Text7 from "../Cell05Text7";
import Cell06Text22 from "../Cell06Text22";
import Cell07Text6 from "../Cell07Text6";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow23 from "../TableRow23";
import StatusIndicator5 from "../StatusIndicator5";
import Cell05Text2 from "../Cell05Text2";
import Table5 from "../Table5";
import Cell07Text7 from "../Cell07Text7";
import StatusIconBig3 from "../StatusIconBig3";
import Scrollbar from "../Scrollbar";
import Arrow from "../Arrow";
import PageNumber52 from "../PageNumber52";
import PageNumber6 from "../PageNumber6";
import Content from "../Content";
import UserInteraction from "../UserInteraction";
import "./Screen07.css";

function Screen07(props) {
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
    label12,
    label13,
    label14,
    label15,
    placeholderText1,
    displaying5Of50Rows,
    placeholderText2,
    placeholderText3,
    placeholderText4,
    text7,
    headerProps,
    pageHeading3Props,
    card7Props,
    tableHeaderProps,
    actionBarProps,
    columnHeader61Props,
    columnHeader5Props,
    columnHeader62Props,
    columnHeader7Props,
    divider2Props,
    table221Props,
    cell06Text221Props,
    divider1Props,
    tableRow231Props,
    table222Props,
    statusIndicator5Props,
    cell05Text21Props,
    cell06Text222Props,
    divider2Props2,
    table223Props,
    table5Props,
    cell05Text22Props,
    cell06Text223Props,
    cell07Text71Props,
    divider3Props,
    table224Props,
    statusIconBig3Props,
    cell05Text23Props,
    cell06Text224Props,
    cell07Text72Props,
    divider4Props,
    tableRow232Props,
    scrollbarProps,
    arrow1Props,
    pageNumber521Props,
    pageNumber522Props,
    pageNumber523Props,
    pageNumber524Props,
    pageNumber61Props,
    pageNumber525Props,
    pageNumber62Props,
    pageNumber63Props,
    arrow2Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen07 screen">
        <div className="overlap-group3-5">
          <div className="dashview-6">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-6">
              <div className="tab-17">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-16">
                    <div className="item-name-30 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-16">
                    <div className="item-name-31 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-5">
              <Link to="/screen01">
                <div className="all-reports-1">
                  <div className="label-221 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-222 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-223 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/screen06">
                <div className="x-pending-3">
                  <div className="label-221 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-222 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-223 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label6}</div>
                </div>
              </Link>

              <Link to="/screen07">
                <div className="x-pending-3" style={{background:'black'}}>
                  <div className="label-221 neuehaasgroteskdisplaystd-regular-normal-black-14px" style={{color:'white'}}>Initial Pending</div>
                  <div className="label-222 neuehaasgroteskdisplaystd-bold-black-24px" style={{color:'white'}}>22</div>
                  <div className="label-223 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">12 Non-automated Reports</div>
                </div>
              </Link>

              {/* <Card7 className={card7Props.className} /> */}
              <Link to="/screen08">
                <div className="x-pending-3">
                  <div className="label-221 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-225 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-5 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-5 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-223 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
                </div>
              </Link>
              <Link to="/screen09">
                <div className="x-pending-3">
                  <div className="label-221 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-222 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-223 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-initial-pending">
              <div className="table-83">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <ActionBar
                  className={actionBarProps.className}
                  icon32Props={actionBarProps.icon32Props}
                  icon32Props2={actionBarProps.icon32Props2}
                  divider2Props={actionBarProps.divider2Props}
                />
                <div className="table-82">
                  <div className="inputs-42">
                    <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-42">
                      <ColumnHeader />
                      <div className="column-header-2-4">
                        <Text2 />
                      </div>
                      <div className="column-header-3-8">
                        <div className="text-78">
                          <div className="label-226 neuehaasgroteskdisplaystd-bold-black-14px">{label12}</div>
                        </div>
                      </div>
                      <ColumnHeader6
                        className={columnHeader61Props.className}
                        text4Props={columnHeader61Props.text4Props}
                      />
                      <ColumnHeader5 className={columnHeader5Props.className} />
                      <ColumnHeader6
                        className={columnHeader62Props.className}
                        text4Props={columnHeader62Props.text4Props}
                      />
                      <ColumnHeader7 className={columnHeader7Props.className} />
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <div className="table-row-11">
                  <div className="inputs-42">
                    <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-42">
                      <Table22 src={table221Props.src} />
                      <Cell02Text3 />
                      <Cell03Text4 />
                      <div className="table-84">
                        <div className="text-icon-101">
                          <State />
                          <div className="label-224 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label13}</div>
                        </div>
                      </div>
                      <Cell05Text7 />
                      <Cell06Text22 className={cell06Text221Props.className} />
                      <Cell07Text6 />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <TableRow23
                  table22Props={tableRow231Props.table22Props}
                  table5Props={tableRow231Props.table5Props}
                  cell06Text22Props={tableRow231Props.cell06Text22Props}
                  cell07Text7Props={tableRow231Props.cell07Text7Props}
                  dividerProps={tableRow231Props.dividerProps}
                />
                <div className="table-row-11">
                  <div className="inputs-42">
                    <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-42">
                      <Table22 src={table222Props.src} />
                      <Cell02Text3 />
                      <Cell03Text4 />
                      <div className="cell-04-text-19">
                        <div className="text-icon-101">
                          <StatusIndicator5 stateProps={statusIndicator5Props.stateProps} />
                          <div className="label-224 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label14}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text21Props.className}
                        textIcon8Props={cell05Text21Props.textIcon8Props}
                      />
                      <Cell06Text22 className={cell06Text222Props.className} />
                      <Cell07Text6 />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider2Props2.className} />
                </div>
                <div className="table-82">
                  <div className="inputs-42">
                    <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-42">
                      <Table22 src={table223Props.src} />
                      <Cell02Text3 />
                      <Cell03Text4 />
                      <Table5 statusIndicator22Props={table5Props.statusIndicator22Props} />
                      <Cell05Text2
                        className={cell05Text22Props.className}
                        textIcon8Props={cell05Text22Props.textIcon8Props}
                      />
                      <Cell06Text22 className={cell06Text223Props.className} />
                      <Cell07Text7 textIcon33Props={cell07Text71Props.textIcon33Props} />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider3Props.className} />
                </div>
                <div className="table-row-11">
                  <div className="inputs-42">
                    <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-42">
                      <Table22 src={table224Props.src} />
                      <Cell02Text3 />
                      <Cell03Text4 />
                      <div className="table-85">
                        <StatusIconBig3 className={statusIconBig3Props.className} />
                        <div className="text-icon-101">
                          <div className="label-224 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label15}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text23Props.className}
                        textIcon8Props={cell05Text23Props.textIcon8Props}
                      />
                      <Cell06Text22 className={cell06Text224Props.className} />
                      <Cell07Text7 textIcon33Props={cell07Text72Props.textIcon33Props} />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider4Props.className} />
                </div>
                <TableRow23
                  table22Props={tableRow232Props.table22Props}
                  table5Props={tableRow232Props.table5Props}
                  cell06Text22Props={tableRow232Props.cell06Text22Props}
                  cell07Text7Props={tableRow232Props.cell07Text7Props}
                  dividerProps={tableRow232Props.dividerProps}
                />
                <Scrollbar stateProps={scrollbarProps.stateProps} />
                <div className="pagination-10">
                  <div className="pagination-item">
                    <div className="show-page-10">
                      <div className="input-fields-20">
                        <div className="elements-40">
                          <div className="frame-31-10">
                            <div className="placeholder-text-115 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                              {placeholderText1}
                            </div>
                            <img
                              className="atomsicon2019close-44"
                              src="/img/atoms-icon-2019-close-37.svg"
                              alt="ATOMS/ICON/2019/close"
                            />
                          </div>
                          <div className="divider-67"></div>
                        </div>
                      </div>
                    </div>
                    <p className="displaying-5-of-50-rows-10 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                      {displaying5Of50Rows}
                    </p>
                  </div>
                  <div className="page-10">
                    <div className="pages-10">
                      <Arrow
                        atomsIcon2019Close1={arrow1Props.atomsIcon2019Close1}
                        atomsIcon2019Close2={arrow1Props.atomsIcon2019Close2}
                      />
                      <div className="page-number-50">
                        <div className="placeholder-text-116 neuehaasgroteskdisplaystd-regular-normal-white-14px">
                          {placeholderText2}
                        </div>
                      </div>
                      <PageNumber52>{pageNumber521Props.children}</PageNumber52>
                      <PageNumber52>{pageNumber522Props.children}</PageNumber52>
                      <PageNumber52>{pageNumber523Props.children}</PageNumber52>
                      <PageNumber52>{pageNumber524Props.children}</PageNumber52>
                      <PageNumber6>{pageNumber61Props.children}</PageNumber6>
                      <PageNumber52>{pageNumber525Props.children}</PageNumber52>
                      <PageNumber6>{pageNumber62Props.children}</PageNumber6>
                      <PageNumber6>{pageNumber63Props.children}</PageNumber6>
                      <div className="page-number-51">
                        <div className="placeholder-text-117 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                          {placeholderText3}
                        </div>
                      </div>
                      <Arrow
                        atomsIcon2019Close1={arrow2Props.atomsIcon2019Close1}
                        atomsIcon2019Close2={arrow2Props.atomsIcon2019Close2}
                      />
                    </div>
                  </div>
                  <div className="pagination-item">
                    <div className="input-fields-21">
                      <div className="page-number-52">
                        <div className="placeholder-text-118 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                          {placeholderText4}
                        </div>
                      </div>
                      <div className="divider-68"></div>
                    </div>
                    <div className="text-7-1 neuehaasgroteskdisplaystd-regular-normal-black-14px">{text7}</div>
                  </div>
                  <div className="button-10">
                    <Content />
                    <div className="dropdown-11">
                      <div className="rectangle-30-11"></div>
                      <img className="icon-66" src="/img/icon-49.svg" alt="Icon" />
                    </div>
                  </div>
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

export default Screen07;
