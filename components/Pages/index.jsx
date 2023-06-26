import React from "react";
import Arrow from "../Arrow";
import PageNumber42 from "../PageNumber42";
import PageNumber2 from "../PageNumber2";
import PageNumber3 from "../PageNumber3";
import "./Pages.css";

function Pages(props) {
  const {
    arrow1Props,
    pageNumber21Props,
    pageNumber22Props,
    pageNumber23Props,
    pageNumber24Props,
    pageNumber25Props,
    pageNumber26Props,
    pageNumber27Props,
    pageNumber28Props,
    arrow2Props,
  } = props;

  return (
    <div className="pages">
      <Arrow
        atomsIcon2019Close1={arrow1Props.atomsIcon2019Close1}
        atomsIcon2019Close2={arrow1Props.atomsIcon2019Close2}
      />
      <PageNumber42 />
      <PageNumber2>{pageNumber21Props.children}</PageNumber2>
      <PageNumber2>{pageNumber22Props.children}</PageNumber2>
      <PageNumber2>{pageNumber23Props.children}</PageNumber2>
      <PageNumber2>{pageNumber24Props.children}</PageNumber2>
      <PageNumber3>{pageNumber25Props.children}</PageNumber3>
      <PageNumber2>{pageNumber26Props.children}</PageNumber2>
      <PageNumber3>{pageNumber27Props.children}</PageNumber3>
      <PageNumber3>{pageNumber28Props.children}</PageNumber3>
      <div className="page-number">
        <div className="placeholder-text-65 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">10</div>
      </div>
      <Arrow
        atomsIcon2019Close1={arrow2Props.atomsIcon2019Close1}
        atomsIcon2019Close2={arrow2Props.atomsIcon2019Close2}
      />
    </div>
  );
}

export default Pages;
