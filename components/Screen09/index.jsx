import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card7 from "../Card7";
import DashboardTable from "../DashboardTable";
import UserInteraction from "../UserInteraction";
import "./Screen09.css";

function Screen09(props) {
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
    headerProps,
    pageHeading3Props,
    dashboardTableProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen09 screen">
        <div className="overlap-group3-4">
          <div className="dashview-5">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-5">
              <div className="tab-16">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-15">
                    <div className="item-name-29 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-15">
                    <div className="item-name-29 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-4">
              <Link to="/screen01">
                <div className="link">
                  <div className="label-217 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-218 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-219 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/screen06">
                <div className="link">
                  <div className="label-217 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-218 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-219 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label6}</div>
                </div>
              </Link>
              <Link to="/screen07">
                <div className="link">
                  <div className="label-217 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label7}</div>
                  <div className="label-218 neuehaasgroteskdisplaystd-bold-black-24px">{label8}</div>
                  <div className="label-219 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label9}</div>
                </div>
              </Link>
              <Link to="/screen08">
                <div className="link">
                  <div className="label-217 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label10}</div>
                  <div className="label-220 neuehaasgroteskdisplaystd-bold-black-24px">
                    <span className="span0-4 neuehaasgroteskdisplaystd-bold-black-24px">{spanText1}</span>
                    <span className="span1-4 neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
                  </div>
                  <p className="label-219 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</p>
                </div>
              </Link>
              <Card7 />
            </div>
            <DashboardTable {...dashboardTableProps} />
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Screen09;
