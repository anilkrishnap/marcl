import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import TableHeader from "../TableHeader";
import ActionBar from "../ActionBar";
import ColumnHeader from "../ColumnHeader";
import Text2 from "../Text2";
import ColumnHeader5 from "../ColumnHeader5";
import Text4 from "../Text4";
import Text5 from "../Text5";
import ColumnHeader8 from "../ColumnHeader8";
import ColumnHeader9 from "../ColumnHeader9";
import Divider2 from "../Divider2";
import Table22 from "../Table22";
import Cell02Text5 from "../Cell02Text5";
import Cell04Text8 from "../Cell04Text8";
import Cell05Text2 from "../Cell05Text2";
import Cell06Text3 from "../Cell06Text3";
import TextIcon10 from "../TextIcon10";
import Table3 from "../Table3";
import Table72 from "../Table72";
import Divider from "../Divider";
import TableRow232 from "../TableRow232";
import Cell07Text9 from "../Cell07Text9";
import StatusIconBig3 from "../StatusIconBig3";
import State from "../State";
import Cell07Text5 from "../Cell07Text5";
import Scrollbar from "../Scrollbar";
import Pagination3 from "../Pagination3";
import UserInteraction from "../UserInteraction";
import "./Screen06.css";

function Screen06(props) {
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
    label8,
    label9,
    label10,
    spanText1,
    spanText2,
    label11,
    label12,
    label13,
    label14,
    label15,
    label16,
    label17,
    headerProps,
    pageHeading3Props,
    tableHeaderProps,
    actionBarProps,
    text4Props,
    divider2Props,
    table221Props,
    cell02Text51Props,
    cell04Text81Props,
    cell05Text21Props,
    divider1Props,
    tableRow2321Props,
    table222Props,
    cell02Text52Props,
    cell04Text82Props,
    cell05Text22Props,
    cell06Text31Props,
    cell07Text91Props,
    divider2Props2,
    tableRow2322Props,
    table223Props,
    cell02Text53Props,
    statusIconBig3Props,
    cell05Text23Props,
    cell06Text32Props,
    cell07Text92Props,
    divider3Props,
    table224Props,
    cell02Text54Props,
    cell05Text24Props,
    cell06Text33Props,
    cell07Text5Props,
    divider4Props,
    scrollbarProps,
    pagination3Props,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen06 screen">
        <div className="overlap-group3-6">
          <div className="dashview-7">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-7">
              <div className="tab-18">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-17">
                    <div className="item-name-32 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-17">
                    <div className="item-name-32 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-6">
              <Link to="/screen01">
                <div className="link-1">
                  <div className="label-230 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-231 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-232 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label3}</div>
                </div>
              </Link>
              <div className="notify-pending-a">
                <div className="label-230 neuehaasgroteskdisplaystd-regular-normal-white-lilac-14px">{label4}</div>
                <div className="label-231 neuehaasgroteskdisplaystd-bold-white-lilac-24px">{label5}</div>
                <div className="label-232 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label6}</div>
              </div>
              <Link to="/screen07">
                <div className="link-1">
                  <div className="label-230 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-231 neuehaasgroteskdisplaystd-bold-black-24px">{label8}</div>
                  <div className="label-232 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label9}</div>
                </div>
              </Link>
              <Link to="/screen08">
                <div className="link-1">
                  <div className="label-230 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label10}</div>
                  <div className="label-234 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-6 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-6 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-232 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</p>
                </div>
              </Link>
              <Link to="/screen09">
                <div className="link-1">
                  <div className="label-230 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label12}</div>
                  <div className="label-231 neuehaasgroteskdisplaystd-bold-black-24px">{label13}</div>
                  <div className="label-232 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label14}</div>
                </div>
              </Link>
            </div>
            <div className="dashboard-table-6">
              <div className="table-87">
                <TableHeader
                  dividerProps={tableHeaderProps.dividerProps}
                  dividerProps2={tableHeaderProps.dividerProps2}
                />
                <ActionBar
                  icon32Props={actionBarProps.icon32Props}
                  icon32Props2={actionBarProps.icon32Props2}
                  divider2Props={actionBarProps.divider2Props}
                />
                <div className="table-row-13">
                  <div className="inputs-44">
                    <img className="checkbox-42" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-44">
                      <ColumnHeader />
                      <div className="column-header-2-5">
                        <Text2 />
                      </div>
                      <div className="column-header-10">
                        <div className="text-79">
                          <div className="label-233 neuehaasgroteskdisplaystd-bold-black-14px">{label15}</div>
                        </div>
                      </div>
                      <ColumnHeader5 />
                      <div className="column-header-10">
                        <Text4>{text4Props.children}</Text4>
                      </div>
                      <div className="column-header-7-6">
                        <Text5 />
                      </div>
                      <ColumnHeader8 />
                      <ColumnHeader9 />
                    </div>
                  </div>
                  <Divider2 className={divider2Props.className} />
                </div>
                <div className="table-row-14">
                  <div className="inputs-44">
                    <img className="checkbox-42" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-44">
                      <Table22 src={table221Props.src} />
                      <Cell02Text5 textIconProps={cell02Text51Props.textIconProps} />
                      <Cell04Text8 textIcon11Props={cell04Text81Props.textIcon11Props} />
                      <Cell05Text2
                        className={cell05Text21Props.className}
                        textIcon8Props={cell05Text21Props.textIcon8Props}
                      />
                      <Cell06Text3 />
                      <div className="cell-07-text-18">
                        <TextIcon10 />
                      </div>
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider1Props.className} />
                </div>
                <TableRow232
                  table22Props={tableRow2321Props.table22Props}
                  cell02Text5Props={tableRow2321Props.cell02Text5Props}
                  cell04Text8Props={tableRow2321Props.cell04Text8Props}
                  cell05Text2Props={tableRow2321Props.cell05Text2Props}
                  cell05Text2Props2={tableRow2321Props.cell05Text2Props2}
                  cell07Text5Props={tableRow2321Props.cell07Text5Props}
                  dividerProps={tableRow2321Props.dividerProps}
                />
                <div className="table-row-14">
                  <div className="inputs-44">
                    <img className="checkbox-42" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-44">
                      <Table22 src={table222Props.src} />
                      <Cell02Text5
                        className={cell02Text52Props.className}
                        textIconProps={cell02Text52Props.textIconProps}
                      />
                      <Cell04Text8 textIcon11Props={cell04Text82Props.textIcon11Props} />
                      <Cell05Text2
                        className={cell05Text22Props.className}
                        textIcon8Props={cell05Text22Props.textIcon8Props}
                      />
                      <Cell06Text3 className={cell06Text31Props.className} />
                      <Cell07Text9 textIcon32Props={cell07Text91Props.textIcon32Props} />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider2Props2.className} />
                </div>
                <TableRow232
                  table22Props={tableRow2322Props.table22Props}
                  cell02Text5Props={tableRow2322Props.cell02Text5Props}
                  cell04Text8Props={tableRow2322Props.cell04Text8Props}
                  cell05Text2Props={tableRow2322Props.cell05Text2Props}
                  cell05Text2Props2={tableRow2322Props.cell05Text2Props2}
                  cell07Text5Props={tableRow2322Props.cell07Text5Props}
                  dividerProps={tableRow2322Props.dividerProps}
                />
                <div className="table-row-14">
                  <div className="inputs-44">
                    <img className="checkbox-42" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-44">
                      <Table22 src={table223Props.src} />
                      <Cell02Text5
                        className={cell02Text53Props.className}
                        textIconProps={cell02Text53Props.textIconProps}
                      />
                      <div className="table-88">
                        <StatusIconBig3 className={statusIconBig3Props.className} />
                        <div className="text-icon-105">
                          <div className="label-233 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label16}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text23Props.className}
                        textIcon8Props={cell05Text23Props.textIcon8Props}
                      />
                      <Cell06Text3 className={cell06Text32Props.className} />
                      <Cell07Text9 textIcon32Props={cell07Text92Props.textIcon32Props} />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider3Props.className} />
                </div>
                <div className="table-row-13">
                  <div className="inputs-44">
                    <img className="checkbox-42" src="/img/checkbox.svg" alt="Checkbox" />
                    <div className="row-data-44">
                      <Table22 src={table224Props.src} />
                      <Cell02Text5
                        className={cell02Text54Props.className}
                        textIconProps={cell02Text54Props.textIconProps}
                      />
                      <div className="cell-04-text-22">
                        <div className="text-icon-105">
                          <State />
                          <div className="label-233 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label17}</div>
                        </div>
                      </div>
                      <Cell05Text2
                        className={cell05Text24Props.className}
                        textIcon8Props={cell05Text24Props.textIcon8Props}
                      />
                      <Cell06Text3 className={cell06Text33Props.className} />
                      <Cell07Text5 textIcon3Props={cell07Text5Props.textIcon3Props} />
                      <Table3 />
                      <Table72 />
                    </div>
                  </div>
                  <Divider className={divider4Props.className} />
                </div>
                <Scrollbar stateProps={scrollbarProps.stateProps} />
                <Pagination3
                  showPageProps={pagination3Props.showPageProps}
                  pagesProps={pagination3Props.pagesProps}
                  goToProps2={pagination3Props.goToProps2}
                />
              </div>
            </div>
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Screen06;
