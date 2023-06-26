import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import PageHeading3 from "../PageHeading3";
import TabItems22 from "../TabItems22";
import Card3 from "../Card3";
import DashboardTable from "../DashboardTable";
import UserInteraction from "../UserInteraction";
import "./Screen08.css";

function Screen08(props) {
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
    card3Props,
    dashboardTableProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="screen08 screen">
        <div className="overlap-group3-3">
          <div className="dashview-4">
            <Header
              menuLogoProps={headerProps.menuLogoProps}
              frame18Props={headerProps.frame18Props}
              aTOMSICON2019notificationProps={headerProps.aTOMSICON2019notificationProps}
              aTOMSICON2019supportProps={headerProps.aTOMSICON2019supportProps}
              aTOMSAVATARDEFAULTProps={headerProps.aTOMSAVATARDEFAULTProps}
            />
            <PageHeading3 dividerProps={pageHeading3Props.dividerProps} />
            <div className="tabs-4">
              <div className="tab-15">
                <TabItems22 />
                <Link to="/screen10">
                  <div className="tab-items-14">
                    <div className="item-name-28 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName1}</div>
                  </div>
                </Link>
                <Link to="/screen10">
                  <div className="tab-items-14">
                    <div className="item-name-28 neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cards-3">
              <Card3 label1={card3Props.label1} label2={card3Props.label2} label3={card3Props.label3} />
              <Link to="/screen06">
                <div className="x-pending-2">
                  <div className="label-200 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                  <div className="label-201 neuehaasgroteskdisplaystd-bold-black-24px">{label2}</div>
                  <div className="label-202 neuehaasgroteskdisplaystd-bold-aqua-forest-12px">{label3}</div>
                </div>
              </Link>
              <Link to="/screen07">
                <div className="x-pending-2">
                  <div className="label-200 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label4}</div>
                  <div className="label-201 neuehaasgroteskdisplaystd-bold-black-24px">{label5}</div>
                  <div className="label-202 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label6}</div>
                </div>
              </Link>
              <div className="final-pending-open-a">
                <div className="label-200 neuehaasgroteskdisplaystd-regular-normal-white-lilac-14px">{label7}</div>
                <div className="label-203 neuehaasgroteskdisplaystd-bold-white-lilac-24px">
                  <span className="span0-3 neuehaasgroteskdisplaystd-bold-white-lilac-24px">{spanText1}</span>
                  <span className="span1-3">{spanText2}</span>
                </div>
                <p className="label-202 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label8}</p>
              </div>
              <Link to="/screen09">
                <div className="x-pending-2">
                  <div className="label-200 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label9}</div>
                  <div className="label-201 neuehaasgroteskdisplaystd-bold-black-24px">{label10}</div>
                  <div className="label-202 neuehaasgroteskdisplaystd-bold-terracotta-12px">{label11}</div>
                </div>
              </Link>
            </div>
            <DashboardTable {...dashboardTableProps} />
          </div>
          <UserInteraction click2={userInteractionProps.click2} className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Screen08;
