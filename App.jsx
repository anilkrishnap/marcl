import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Screen01 from "./components/Screen01";
import Screen11 from "./components/Screen11";
import Screen02 from "./components/Screen02";
import Screen10 from "./components/Screen10";
import Screen08 from "./components/Screen08";
import Screen09 from "./components/Screen09";
import Screen07 from "./components/Screen07";
import Screen06 from "./components/Screen06";
import Screen03 from "./components/Screen03";
import Screen04 from "./components/Screen04";
import Screen05 from "./components/Screen05";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|screen01)">
          <Screen01 {...screen01Data} />
        </Route>
        <Route path="/screen11">
          <Screen11 {...screen11Data} />
        </Route>
        <Route path="/screen02">
          <Screen02 {...screen02Data} />
        </Route>
        <Route path="/screen10">
          <Screen10 {...screen10Data} />
        </Route>
        <Route path="/screen08">
          <Screen08 {...screen08Data} />
        </Route>
        <Route path="/screen09">
          <Screen09 {...screen09Data} />
        </Route>
        <Route path="/screen07">
          <Screen07 {...screen07Data} />
        </Route>
        <Route path="/screen06">
          <Screen06 {...screen06Data} />
        </Route>
        <Route path="/screen03">
          <Screen03 {...screen03Data} />
        </Route>
        <Route path="/screen04">
          <Screen04 {...screen04Data} />
        </Route>
        <Route path="/screen05">
          <Screen05 {...screen05Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const menuLogo1Data = {
    className: "",
};

const icon221Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame181Data = {
    icon22Props: icon221Data,
};

const aTOMSICON2019notification1Data = {
    className: "",
};

const aTOMSICON2019support1Data = {
    className: "",
};

const aTOMSAVATARDEFAULT1Data = {
    className: "",
};

const header1Data = {
    menuLogoProps: menuLogo1Data,
    frame18Props: frame181Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification1Data,
    aTOMSICON2019supportProps: aTOMSICON2019support1Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT1Data,
};

const divider2Data = {
    className: "atomsdividersline2-pxblack",
};

const pageHeading31Data = {
    dividerProps: divider2Data,
};

const divider3Data = {
    className: "divider",
};

const divider22Data = {
    className: "",
};

const tableHeader1Data = {
    dividerProps: divider3Data,
    dividerProps2: divider22Data,
};

const saveGridSettings1Data = {
    className: "",
};

const icon321Data = {
    saveGridSettingsProps: saveGridSettings1Data,
};

const icon222Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1831Data = {
    icon22Props: icon222Data,
};

const searchInput1Data = {
    frame183Props: frame1831Data,
};

const divider23Data = {
    className: "divider-12",
};

const text41Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader61Data = {
    text4Props: text41Data,
};

const divider24Data = {
    className: "divider-13",
};

const tableHeader21Data = {
    columnHeader25Props: columnHeader61Data,
    divider2Props: divider24Data,
};

const table221Data = {
    src: "/img/icon-57.svg",
};

const textIcon31Data = {
    children: "Final Pending - Open",
};

const table21Data = {
    textIcon3Props: textIcon31Data,
};

const textIcon41Data = {
    children: "5 Days",
};

const table521Data = {
    textIcon4Props: textIcon41Data,
};

const textIcon321Data = {
    children: "--",
};

const table621Data = {
    textIcon3Props: textIcon321Data,
};

const divider4Data = {
    className: "divider",
};

const tableRow11Data = {
    table22Props: table221Data,
    table2Props: table21Data,
    table52Props: table521Data,
    table62Props: table621Data,
    dividerProps: divider4Data,
};

const table222Data = {
    src: "/img/icon-57.svg",
};

const cell04Text1Data = {
    label: "Final Pending - Open",
};

const textIcon42Data = {
    children: "2 Days",
};

const table522Data = {
    textIcon4Props: textIcon42Data,
};

const cell06Text222Data = {
    className: "cell-06-text-1",
};

const textIcon331Data = {
    children: "John Cart",
};

const cell07Text21Data = {
    textIcon33Props: textIcon331Data,
};

const divider5Data = {
    className: "divider",
};

const tableRow21Data = {
    table22Props: table222Data,
    cell04TextProps: cell04Text1Data,
    table52Props: table522Data,
    cell06Text22Props: cell06Text222Data,
    cell07Text2Props: cell07Text21Data,
    dividerProps: divider5Data,
};

const table223Data = {
    src: "/img/icon-57.svg",
};

const state2Data = {
    className: "rectangle-5-2",
};

const statusIndicator51Data = {
    stateProps: state2Data,
};

const cell04Text21Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator51Data,
};

const textIcon81Data = {
    children: "20 Days",
};

const cell05Text21Data = {
    textIcon8Props: textIcon81Data,
};

const textIcon322Data = {
    children: "--",
};

const table622Data = {
    textIcon3Props: textIcon322Data,
};

const divider6Data = {
    className: "divider",
};

const tableRow31Data = {
    table22Props: table223Data,
    cell04Text2Props: cell04Text21Data,
    cell05Text2Props: cell05Text21Data,
    table62Props: table622Data,
    dividerProps: divider6Data,
};

const table224Data = {
    src: "/img/icon-4@2x.png",
};

const state3Data = {
    className: "rectangle-5-2",
};

const statusIndicator52Data = {
    stateProps: state3Data,
};

const cell04Text22Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator52Data,
};

const textIcon82Data = {
    children: "20 Days",
};

const cell05Text22Data = {
    textIcon8Props: textIcon82Data,
};

const cell06Text224Data = {
    className: "cell-06-text-1",
};

const textIcon332Data = {
    children: "John Cart",
};

const cell07Text22Data = {
    textIcon33Props: textIcon332Data,
};

const divider7Data = {
    className: "divider",
};

const tableRow41Data = {
    table22Props: table224Data,
    cell04Text2Props: cell04Text22Data,
    cell05Text2Props: cell05Text22Data,
    cell06Text22Props: cell06Text224Data,
    cell07Text2Props: cell07Text22Data,
    dividerProps: divider7Data,
};

const table225Data = {
    src: "/img/icon-57.svg",
};

const statusIconBig31Data = {
    className: "",
};

const textIcon34Data = {
    children: "Initial Pending",
};

const textIcon83Data = {
    children: "4 Hours",
};

const cell05Text23Data = {
    className: "cell-05-text-9",
    textIcon8Props: textIcon83Data,
};

const textIcon323Data = {
    children: "John Cart",
    className: "text-icon-47",
};

const cell07Text31Data = {
    textIcon32Props: textIcon323Data,
};

const divider8Data = {
    className: "divider",
};

const tableRow51Data = {
    table22Props: table225Data,
    statusIconBig3Props: statusIconBig31Data,
    textIcon3Props: textIcon34Data,
    cell05Text2Props: cell05Text23Data,
    cell07Text3Props: cell07Text31Data,
    dividerProps: divider8Data,
};

const table226Data = {
    src: "/img/icon-57.svg",
};

const cell04Text3Data = {
    label: "Initial Pending",
};

const textIcon84Data = {
    children: "4 Hours",
};

const cell05Text24Data = {
    className: "cell-05-text-9",
    textIcon8Props: textIcon84Data,
};

const cell06Text226Data = {
    className: "cell-06-text-1",
};

const textIcon333Data = {
    children: "John Cart",
};

const cell07Text23Data = {
    textIcon33Props: textIcon333Data,
};

const divider9Data = {
    className: "divider",
};

const tableRow61Data = {
    table22Props: table226Data,
    cell04TextProps: cell04Text3Data,
    cell05Text2Props: cell05Text24Data,
    cell06Text22Props: cell06Text226Data,
    cell07Text2Props: cell07Text23Data,
    dividerProps: divider9Data,
};

const state5Data = {
    className: "scroller",
};

const scrollbar1Data = {
    stateProps: state5Data,
};

const inputFields1Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-49.svg",
};

const showPage1Data = {
    inputFieldsProps: inputFields1Data,
};

const information1Data = {
    showPageProps: showPage1Data,
};

const arrow1Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-3.svg",
};

const pageNumber21Data = {
    children: "2",
};

const pageNumber22Data = {
    children: "3",
};

const pageNumber23Data = {
    children: "4",
};

const pageNumber24Data = {
    children: "5",
};

const pageNumber31Data = {
    children: "6",
};

const pageNumber25Data = {
    children: "7",
};

const pageNumber32Data = {
    children: "8",
};

const pageNumber33Data = {
    children: "9",
};

const arrow2Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-4.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages1Data = {
    arrow1Props: arrow1Data,
    pageNumber21Props: pageNumber21Data,
    pageNumber22Props: pageNumber22Data,
    pageNumber23Props: pageNumber23Data,
    pageNumber24Props: pageNumber24Data,
    pageNumber25Props: pageNumber31Data,
    pageNumber26Props: pageNumber25Data,
    pageNumber27Props: pageNumber32Data,
    pageNumber28Props: pageNumber33Data,
    arrow2Props: arrow2Data,
};

const page1Data = {
    pagesProps: pages1Data,
};

const dropdown1Data = {
    src: "/img/icon-6.svg",
};

const button1Data = {
    dropdownProps: dropdown1Data,
};

const pagination31Data = {
    showPageProps: information1Data,
    pagesProps: page1Data,
    goToProps2: button1Data,
};

const screen01Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    click2: "",
    number: "4",
    headerProps: header1Data,
    pageHeading3Props: pageHeading31Data,
    tableHeaderProps: tableHeader1Data,
    icon32Props: icon321Data,
    searchInputProps: searchInput1Data,
    divider2Props: divider23Data,
    tableHeader2Props: tableHeader21Data,
    tableRow1Props: tableRow11Data,
    tableRow2Props: tableRow21Data,
    tableRow3Props: tableRow31Data,
    tableRow4Props: tableRow41Data,
    tableRow5Props: tableRow51Data,
    tableRow6Props: tableRow61Data,
    scrollbarProps: scrollbar1Data,
    pagination3Props: pagination31Data,
};

const menuLogo2Data = {
    className: "menu-logo-1",
};

const icon223Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-1",
};

const frame184Data = {
    icon22Props: icon223Data,
};

const aTOMSICON2019notification2Data = {
    className: "atomsicon2019notification-1",
};

const aTOMSICON2019support2Data = {
    className: "atomsicon2019chat-copy-1",
};

const aTOMSAVATARDEFAULT2Data = {
    className: "atomsavatardefault-1",
};

const header2Data = {
    menuLogoProps: menuLogo2Data,
    frame18Props: frame184Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification2Data,
    aTOMSICON2019supportProps: aTOMSICON2019support2Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT2Data,
};

const divider11Data = {
    className: "atomsdividersline2-pxblack-1",
};

const pageHeading32Data = {
    dividerProps: divider11Data,
};

const divider12Data = {
    className: "divider-1",
};

const divider25Data = {
    className: "",
};

const tableHeader3Data = {
    dividerProps: divider12Data,
    dividerProps2: divider25Data,
};

const saveGridSettings2Data = {
    className: "",
};

const icon322Data = {
    saveGridSettingsProps: saveGridSettings2Data,
};

const icon224Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1832Data = {
    icon22Props: icon224Data,
};

const searchInput2Data = {
    className: "",
    frame183Props: frame1832Data,
};

const divider26Data = {
    className: "divider-14",
};

const actionBar1Data = {
    icon32Props: icon322Data,
    icon32Props2: searchInput2Data,
    divider2Props: divider26Data,
};

const columnHeader22Data = {
    className: "column-header-2-1",
};

const divider27Data = {
    className: "divider-15",
};

const table327Data = {
    className: "cell-02-text-6",
};

const state6Data = {
    className: "rectangle-5-18",
};

const statusIndicator53Data = {
    stateProps: state6Data,
};

const cell04Text32Data = {
    statusIndicator5Props: statusIndicator53Data,
};

const textIcon92Data = {
    children: "04/04/2023 05:30",
};

const cell06Text21Data = {
    textIcon9Props: textIcon92Data,
};

const textIcon334Data = {
    children: "Tom Parker",
};

const cell07Text41Data = {
    textIcon33Props: textIcon334Data,
};

const divider13Data = {
    className: "divider-1",
};

const table328Data = {
    className: "cell-02-text-6",
};

const state7Data = {
    className: "rectangle-5-18",
};

const statusIndicator54Data = {
    stateProps: state7Data,
};

const cell04Text33Data = {
    className: "cell-04-text-12-2",
    statusIndicator5Props: statusIndicator54Data,
};

const textIcon93Data = {
    children: "04/04/2023 05:30",
};

const cell06Text23Data = {
    textIcon9Props: textIcon93Data,
};

const textIcon335Data = {
    children: "Tom Parker",
};

const cell07Text42Data = {
    textIcon33Props: textIcon335Data,
};

const divider14Data = {
    className: "divider-1",
};

const tableRow221Data = {
    table32Props: table328Data,
    cell04Text3Props: cell04Text33Data,
    cell06Text2Props: cell06Text23Data,
    cell07Text4Props: cell07Text42Data,
    dividerProps: divider14Data,
};

const table329Data = {
    className: "cell-02-text-6",
};

const state8Data = {
    className: "rectangle-5-18",
};

const statusIndicator55Data = {
    stateProps: state8Data,
};

const cell04Text34Data = {
    className: "cell-04-text-12-3",
    statusIndicator5Props: statusIndicator55Data,
};

const textIcon94Data = {
    children: "04/04/2023 05:30",
};

const cell06Text24Data = {
    textIcon9Props: textIcon94Data,
};

const textIcon336Data = {
    children: "Tom Parker",
};

const cell07Text43Data = {
    textIcon33Props: textIcon336Data,
};

const divider15Data = {
    className: "divider-1",
};

const tableRow222Data = {
    table32Props: table329Data,
    cell04Text3Props: cell04Text34Data,
    cell06Text2Props: cell06Text24Data,
    cell07Text4Props: cell07Text43Data,
    dividerProps: divider15Data,
};

const table3210Data = {
    className: "cell-02-text-6",
};

const state9Data = {
    className: "rectangle-5-18",
};

const statusIndicator56Data = {
    stateProps: state9Data,
};

const cell04Text35Data = {
    className: "cell-04-text-12-4",
    statusIndicator5Props: statusIndicator56Data,
};

const textIcon95Data = {
    children: "04/04/2023 05:30",
};

const cell06Text25Data = {
    textIcon9Props: textIcon95Data,
};

const textIcon337Data = {
    children: "Tom Parker",
};

const cell07Text44Data = {
    textIcon33Props: textIcon337Data,
};

const divider16Data = {
    className: "divider-1",
};

const tableRow223Data = {
    table32Props: table3210Data,
    cell04Text3Props: cell04Text35Data,
    cell06Text2Props: cell06Text25Data,
    cell07Text4Props: cell07Text44Data,
    dividerProps: divider16Data,
};

const table3211Data = {
    className: "cell-02-text-6",
};

const state10Data = {
    className: "rectangle-5-18",
};

const statusIndicator57Data = {
    stateProps: state10Data,
};

const cell04Text36Data = {
    className: "cell-04-text-12-5",
    statusIndicator5Props: statusIndicator57Data,
};

const textIcon96Data = {
    children: "04/04/2023 05:30",
};

const cell06Text26Data = {
    textIcon9Props: textIcon96Data,
};

const textIcon338Data = {
    children: "Tom Parker",
};

const cell07Text45Data = {
    textIcon33Props: textIcon338Data,
};

const divider17Data = {
    className: "divider-1",
};

const tableRow224Data = {
    table32Props: table3211Data,
    cell04Text3Props: cell04Text36Data,
    cell06Text2Props: cell06Text26Data,
    cell07Text4Props: cell07Text45Data,
    dividerProps: divider17Data,
};

const table3212Data = {
    className: "cell-02-text-6",
};

const state11Data = {
    className: "rectangle-5-18",
};

const statusIndicator58Data = {
    stateProps: state11Data,
};

const cell04Text37Data = {
    className: "cell-04-text-12",
    statusIndicator5Props: statusIndicator58Data,
};

const textIcon97Data = {
    children: "04/04/2023 05:30",
};

const cell06Text27Data = {
    textIcon9Props: textIcon97Data,
};

const textIcon339Data = {
    children: "Tom Parker",
};

const cell07Text46Data = {
    textIcon33Props: textIcon339Data,
};

const divider18Data = {
    className: "divider-1",
};

const tableRow225Data = {
    table32Props: table3212Data,
    cell04Text3Props: cell04Text37Data,
    cell06Text2Props: cell06Text27Data,
    cell07Text4Props: cell07Text46Data,
    dividerProps: divider18Data,
};

const state12Data = {
    className: "scroller-1",
};

const scrollbar2Data = {
    stateProps: state12Data,
};

const inputFields3Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-7.svg",
};

const showPage2Data = {
    inputFieldsProps: inputFields3Data,
};

const information2Data = {
    showPageProps: showPage2Data,
};

const arrow3Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-9.svg",
};

const pageNumber26Data = {
    children: "2",
};

const pageNumber27Data = {
    children: "3",
};

const pageNumber28Data = {
    children: "4",
};

const pageNumber29Data = {
    children: "5",
};

const pageNumber34Data = {
    children: "6",
};

const pageNumber210Data = {
    children: "7",
};

const pageNumber35Data = {
    children: "8",
};

const pageNumber36Data = {
    children: "9",
};

const arrow4Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-10.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages2Data = {
    arrow1Props: arrow3Data,
    pageNumber21Props: pageNumber26Data,
    pageNumber22Props: pageNumber27Data,
    pageNumber23Props: pageNumber28Data,
    pageNumber24Props: pageNumber29Data,
    pageNumber25Props: pageNumber34Data,
    pageNumber26Props: pageNumber210Data,
    pageNumber27Props: pageNumber35Data,
    pageNumber28Props: pageNumber36Data,
    arrow2Props: arrow4Data,
};

const page2Data = {
    pagesProps: pages2Data,
};

const dropdown2Data = {
    src: "/img/icon-13.svg",
};

const button2Data = {
    dropdownProps: dropdown2Data,
};

const pagination32Data = {
    showPageProps: information2Data,
    pagesProps: page2Data,
    goToProps2: button2Data,
};

const screen11Data = {
    itemName1: "Current Reports",
    itemName2: "My Reports",
    itemName3: "Submitted Reports",
    label1: "Status",
    label2: "Workbench - Remedy",
    label3: "Submitted on (UTC)",
    label4: "Submitted by",
    headerProps: header2Data,
    pageHeading3Props: pageHeading32Data,
    tableHeaderProps: tableHeader3Data,
    actionBarProps: actionBar1Data,
    columnHeader2Props: columnHeader22Data,
    divider2Props: divider27Data,
    table32Props: table327Data,
    cell04Text3Props: cell04Text32Data,
    cell06Text2Props: cell06Text21Data,
    cell07Text4Props: cell07Text41Data,
    dividerProps: divider13Data,
    tableRow221Props: tableRow221Data,
    tableRow222Props: tableRow222Data,
    tableRow223Props: tableRow223Data,
    tableRow224Props: tableRow224Data,
    tableRow225Props: tableRow225Data,
    scrollbarProps: scrollbar2Data,
    pagination3Props: pagination32Data,
};

const menuLogo3Data = {
    className: "menu-logo-2",
};

const icon225Data = {
    src: "/img/shape.svg",
    className: "",
};

const frame185Data = {
    icon22Props: icon225Data,
};

const aTOMSICON2019notification3Data = {
    className: "atomsicon2019notification-2",
};

const aTOMSICON2019support3Data = {
    className: "",
};

const aTOMSAVATARDEFAULT3Data = {
    className: "",
};

const header3Data = {
    menuLogoProps: menuLogo3Data,
    frame18Props: frame185Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification3Data,
    aTOMSICON2019supportProps: aTOMSICON2019support3Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT3Data,
};

const divider20Data = {
    className: "atomsdividersline2-pxblack-2",
};

const pageHeading33Data = {
    dividerProps: divider20Data,
};

const divider21Data = {
    className: "divider-2",
};

const divider28Data = {
    className: "",
};

const tableHeader4Data = {
    dividerProps: divider21Data,
    dividerProps2: divider28Data,
};

const saveGridSettings3Data = {
    className: "",
};

const icon323Data = {
    saveGridSettingsProps: saveGridSettings3Data,
};

const icon226Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1833Data = {
    icon22Props: icon226Data,
};

const searchInput3Data = {
    frame183Props: frame1833Data,
};

const divider29Data = {
    className: "divider-16",
};

const text42Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader62Data = {
    text4Props: text42Data,
};

const divider210Data = {
    className: "divider-17",
};

const tableHeader22Data = {
    columnHeader25Props: columnHeader62Data,
    divider2Props: divider210Data,
};

const table227Data = {
    src: "/img/icon-14.svg",
};

const textIcon35Data = {
    children: "Final Pending - Open",
};

const table23Data = {
    textIcon3Props: textIcon35Data,
};

const textIcon43Data = {
    children: "5 Days",
};

const table523Data = {
    textIcon4Props: textIcon43Data,
};

const textIcon324Data = {
    children: "--",
};

const table623Data = {
    textIcon3Props: textIcon324Data,
};

const divider30Data = {
    className: "divider-2",
};

const tableRow12Data = {
    table22Props: table227Data,
    table2Props: table23Data,
    table52Props: table523Data,
    table62Props: table623Data,
    dividerProps: divider30Data,
};

const cell04Text4Data = {
    label: "Final Pending - Open",
};

const textIcon44Data = {
    children: "2 Days",
};

const table524Data = {
    textIcon4Props: textIcon44Data,
};

const cell06Text228Data = {
    className: "cell-06-text-3",
};

const textIcon3310Data = {
    children: "John Cart",
};

const cell07Text24Data = {
    textIcon33Props: textIcon3310Data,
};

const divider31Data = {
    className: "divider-2",
};

const table228Data = {
    src: "/img/icon-14.svg",
};

const state14Data = {
    className: "rectangle-5-4",
};

const statusIndicator59Data = {
    stateProps: state14Data,
};

const cell04Text23Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator59Data,
};

const textIcon85Data = {
    children: "20 Days",
};

const cell05Text25Data = {
    textIcon8Props: textIcon85Data,
};

const textIcon325Data = {
    children: "--",
};

const table624Data = {
    textIcon3Props: textIcon325Data,
};

const divider32Data = {
    className: "divider-2",
};

const tableRow32Data = {
    table22Props: table228Data,
    cell04Text2Props: cell04Text23Data,
    cell05Text2Props: cell05Text25Data,
    table62Props: table624Data,
    dividerProps: divider32Data,
};

const table229Data = {
    src: "/img/icon-4@2x.png",
};

const state15Data = {
    className: "rectangle-5-4",
};

const statusIndicator510Data = {
    stateProps: state15Data,
};

const cell04Text24Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator510Data,
};

const textIcon86Data = {
    children: "20 Days",
};

const cell05Text26Data = {
    textIcon8Props: textIcon86Data,
};

const cell06Text2210Data = {
    className: "cell-06-text-3",
};

const textIcon3311Data = {
    children: "John Cart",
};

const cell07Text25Data = {
    textIcon33Props: textIcon3311Data,
};

const divider33Data = {
    className: "divider-2",
};

const tableRow42Data = {
    table22Props: table229Data,
    cell04Text2Props: cell04Text24Data,
    cell05Text2Props: cell05Text26Data,
    cell06Text22Props: cell06Text2210Data,
    cell07Text2Props: cell07Text25Data,
    dividerProps: divider33Data,
};

const table2210Data = {
    src: "/img/icon-14.svg",
};

const statusIconBig32Data = {
    className: "status-icon-big-1",
};

const textIcon36Data = {
    children: "Initial Pending",
};

const textIcon87Data = {
    children: "4 Hours",
};

const cell05Text27Data = {
    className: "cell-05-text-11",
    textIcon8Props: textIcon87Data,
};

const textIcon326Data = {
    children: "John Cart",
    className: "text-icon-48",
};

const cell07Text32Data = {
    textIcon32Props: textIcon326Data,
};

const divider34Data = {
    className: "divider-2",
};

const tableRow52Data = {
    table22Props: table2210Data,
    statusIconBig3Props: statusIconBig32Data,
    textIcon3Props: textIcon36Data,
    cell05Text2Props: cell05Text27Data,
    cell07Text3Props: cell07Text32Data,
    dividerProps: divider34Data,
};

const table2211Data = {
    src: "/img/icon-14.svg",
};

const cell04Text5Data = {
    label: "Initial Pending",
};

const textIcon88Data = {
    children: "4 Hours",
};

const cell05Text28Data = {
    className: "cell-05-text-11",
    textIcon8Props: textIcon88Data,
};

const cell06Text2212Data = {
    className: "cell-06-text-3",
};

const textIcon3312Data = {
    children: "John Cart",
};

const cell07Text26Data = {
    textIcon33Props: textIcon3312Data,
};

const divider35Data = {
    className: "divider-2",
};

const tableRow62Data = {
    table22Props: table2211Data,
    cell04TextProps: cell04Text5Data,
    cell05Text2Props: cell05Text28Data,
    cell06Text22Props: cell06Text2212Data,
    cell07Text2Props: cell07Text26Data,
    dividerProps: divider35Data,
};

const state17Data = {
    className: "scroller-2",
};

const scrollbar3Data = {
    stateProps: state17Data,
};

const inputFields4Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-13.svg",
};

const showPage3Data = {
    inputFieldsProps: inputFields4Data,
};

const information3Data = {
    showPageProps: showPage3Data,
};

const arrow5Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-15.svg",
};

const pageNumber211Data = {
    children: "2",
};

const pageNumber212Data = {
    children: "3",
};

const pageNumber213Data = {
    children: "4",
};

const pageNumber214Data = {
    children: "5",
};

const pageNumber37Data = {
    children: "6",
};

const pageNumber215Data = {
    children: "7",
};

const pageNumber38Data = {
    children: "8",
};

const pageNumber39Data = {
    children: "9",
};

const arrow6Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-16.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages3Data = {
    arrow1Props: arrow5Data,
    pageNumber21Props: pageNumber211Data,
    pageNumber22Props: pageNumber212Data,
    pageNumber23Props: pageNumber213Data,
    pageNumber24Props: pageNumber214Data,
    pageNumber25Props: pageNumber37Data,
    pageNumber26Props: pageNumber215Data,
    pageNumber27Props: pageNumber38Data,
    pageNumber28Props: pageNumber39Data,
    arrow2Props: arrow6Data,
};

const page3Data = {
    pagesProps: pages3Data,
};

const dropdown3Data = {
    src: "/img/icon-20.svg",
};

const button3Data = {
    dropdownProps: dropdown3Data,
};

const pagination33Data = {
    showPageProps: information3Data,
    pagesProps: page3Data,
    goToProps2: button3Data,
};

const state18Data = {
    className: "state",
};

const dropdownMenu41Data = {
    text: "Name",
    stateProps: state18Data,
};

const state19Data = {
    className: "state-1",
};

const dropdownMenu42Data = {
    text: "Duplicates",
    stateProps: state19Data,
};

const state20Data = {
    className: "state",
};

const dropdownMenu43Data = {
    text: "Unassigned",
    stateProps: state20Data,
};

const state21Data = {
    className: "state",
};

const dropdownMenu44Data = {
    text: "Open Reports",
    stateProps: state21Data,
};

const state22Data = {
    className: "state",
};

const dropdownMenu2Data = {
    text: "Name",
    icon: "/img/icon-21.svg",
    stateProps: state22Data,
};

const state23Data = {
    className: "state",
};

const dropdownMenu45Data = {
    text: "None",
    stateProps: state23Data,
};

const state24Data = {
    className: "scroller-3",
};

const scrollbar22Data = {
    stateProps: state24Data,
};

const dropdown32Data = {
    dropdownMenu1Props: dropdownMenu41Data,
    dropdownMenu2Props: dropdownMenu42Data,
    dropdownMenu3Props: dropdownMenu43Data,
    dropdownMenu4Props: dropdownMenu44Data,
    dropdownMenu2Props2: dropdownMenu2Data,
    dropdownMenu5Props: dropdownMenu45Data,
    scrollbar2Props: scrollbar22Data,
};

const screen02Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    hover: "HOVER",
    inputField1: "/img/input-field@2x.png",
    inputField2: "/img/input-field-1@2x.png",
    headerProps: header3Data,
    pageHeading3Props: pageHeading33Data,
    tableHeaderProps: tableHeader4Data,
    icon32Props: icon323Data,
    searchInputProps: searchInput3Data,
    divider2Props: divider29Data,
    tableHeader2Props: tableHeader22Data,
    tableRow1Props: tableRow12Data,
    cell04TextProps: cell04Text4Data,
    table52Props: table524Data,
    cell06Text22Props: cell06Text228Data,
    cell07Text2Props: cell07Text24Data,
    dividerProps: divider31Data,
    tableRow3Props: tableRow32Data,
    tableRow4Props: tableRow42Data,
    tableRow5Props: tableRow52Data,
    tableRow6Props: tableRow62Data,
    scrollbarProps: scrollbar3Data,
    pagination3Props: pagination33Data,
    dropdown3Props: dropdown32Data,
};

const menuLogo4Data = {
    className: "menu-logo-3",
};

const icon227Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-3",
};

const frame186Data = {
    icon22Props: icon227Data,
};

const aTOMSICON2019notification4Data = {
    className: "atomsicon2019notification-3",
};

const aTOMSICON2019support4Data = {
    className: "atomsicon2019chat-copy-3",
};

const aTOMSAVATARDEFAULT4Data = {
    className: "atomsavatardefault-3",
};

const header4Data = {
    menuLogoProps: menuLogo4Data,
    frame18Props: frame186Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification4Data,
    aTOMSICON2019supportProps: aTOMSICON2019support4Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT4Data,
};

const divider37Data = {
    className: "atomsdividersline2-pxblack-3",
};

const pageHeading34Data = {
    dividerProps: divider37Data,
};

const card31Data = {
    label1: "Initial Pending",
    label2: "22",
    label3: "12 Non-automated Reports",
};

const card32Data = {
    label1: "Final Pending - Restored",
    label2: "14",
    label3: "12 Unassigned Reports",
};

const cards3Data = {
    card31Props: card31Data,
    card32Props: card32Data,
};

const divider38Data = {
    className: "divider-3",
};

const divider211Data = {
    className: "",
};

const tableHeader5Data = {
    dividerProps: divider38Data,
    dividerProps2: divider211Data,
};

const saveGridSettings4Data = {
    className: "",
};

const icon324Data = {
    saveGridSettingsProps: saveGridSettings4Data,
};

const icon228Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1834Data = {
    icon22Props: icon228Data,
};

const searchInput4Data = {
    frame183Props: frame1834Data,
};

const divider212Data = {
    className: "divider-18",
};

const text43Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader63Data = {
    text4Props: text43Data,
};

const divider213Data = {
    className: "divider-19",
};

const table2212Data = {
    src: "/img/icon-7.svg",
};

const textIcon37Data = {
    children: "Final Pending - Open",
};

const table24Data = {
    textIcon3Props: textIcon37Data,
};

const textIcon45Data = {
    children: "5 Days",
};

const table525Data = {
    textIcon4Props: textIcon45Data,
};

const textIcon327Data = {
    children: "Yes",
    className: "",
};

const cell07Text33Data = {
    className: "cell-07-text-11",
    textIcon32Props: textIcon327Data,
};

const divider39Data = {
    className: "divider-3",
};

const table2213Data = {
    src: "/img/icon-7.svg",
};

const cell04Text6Data = {
    label: "Final Pending - Open",
};

const textIcon46Data = {
    children: "2 Days",
};

const table526Data = {
    textIcon4Props: textIcon46Data,
};

const cell06Text2214Data = {
    className: "cell-06-text-5",
};

const textIcon3313Data = {
    children: "No",
};

const cell07Text27Data = {
    textIcon33Props: textIcon3313Data,
};

const divider40Data = {
    className: "divider-3",
};

const tableRow23Data = {
    table22Props: table2213Data,
    cell04TextProps: cell04Text6Data,
    table52Props: table526Data,
    cell06Text22Props: cell06Text2214Data,
    cell07Text2Props: cell07Text27Data,
    dividerProps: divider40Data,
};

const table2214Data = {
    src: "/img/icon-7.svg",
};

const state26Data = {
    className: "rectangle-5-6",
};

const statusIndicator511Data = {
    stateProps: state26Data,
};

const cell04Text25Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator511Data,
};

const textIcon89Data = {
    children: "20 Days",
};

const cell05Text29Data = {
    textIcon8Props: textIcon89Data,
};

const textIcon328Data = {
    children: "Yes",
    className: "",
};

const cell07Text34Data = {
    className: "cell-07-text-11",
    textIcon32Props: textIcon328Data,
};

const divider41Data = {
    className: "divider-3",
};

const table2215Data = {
    src: "/img/icon-4@2x.png",
};

const state27Data = {
    className: "rectangle-5-6",
};

const statusIndicator512Data = {
    stateProps: state27Data,
};

const cell04Text26Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator512Data,
};

const textIcon810Data = {
    children: "20 Days",
};

const cell05Text210Data = {
    textIcon8Props: textIcon810Data,
};

const cell06Text2216Data = {
    className: "cell-06-text-5",
};

const textIcon3314Data = {
    children: "No",
};

const cell07Text28Data = {
    textIcon33Props: textIcon3314Data,
};

const divider42Data = {
    className: "divider-3",
};

const tableRow43Data = {
    table22Props: table2215Data,
    cell04Text2Props: cell04Text26Data,
    cell05Text2Props: cell05Text210Data,
    cell06Text22Props: cell06Text2216Data,
    cell07Text2Props: cell07Text28Data,
    dividerProps: divider42Data,
};

const table2216Data = {
    src: "/img/icon-7.svg",
};

const statusIconBig33Data = {
    className: "",
};

const textIcon310Data = {
    children: "Initial Pending",
};

const textIcon811Data = {
    children: "4 Hours",
};

const cell05Text211Data = {
    className: "cell-05-text-13",
    textIcon8Props: textIcon811Data,
};

const textIcon329Data = {
    children: "No",
    className: "text-icon-49",
};

const cell07Text35Data = {
    textIcon32Props: textIcon329Data,
};

const divider43Data = {
    className: "divider-3",
};

const tableRow53Data = {
    table22Props: table2216Data,
    statusIconBig3Props: statusIconBig33Data,
    textIcon3Props: textIcon310Data,
    cell05Text2Props: cell05Text211Data,
    cell07Text3Props: cell07Text35Data,
    dividerProps: divider43Data,
};

const table2217Data = {
    src: "/img/icon-7.svg",
};

const cell04Text7Data = {
    label: "Initial Pending",
};

const textIcon812Data = {
    children: "4 Hours",
};

const cell05Text212Data = {
    className: "cell-05-text-13",
    textIcon8Props: textIcon812Data,
};

const cell06Text2218Data = {
    className: "cell-06-text-5",
};

const textIcon3315Data = {
    children: "No",
};

const cell07Text29Data = {
    textIcon33Props: textIcon3315Data,
};

const divider44Data = {
    className: "divider-3",
};

const tableRow63Data = {
    table22Props: table2217Data,
    cell04TextProps: cell04Text7Data,
    cell05Text2Props: cell05Text212Data,
    cell06Text22Props: cell06Text2218Data,
    cell07Text2Props: cell07Text29Data,
    dividerProps: divider44Data,
};

const state29Data = {
    className: "scroller-4",
};

const scrollbar4Data = {
    stateProps: state29Data,
};

const inputFields5Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-7.svg",
};

const showPage4Data = {
    inputFieldsProps: inputFields5Data,
};

const information4Data = {
    showPageProps: showPage4Data,
};

const arrow7Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-22.svg",
};

const pageNumber216Data = {
    children: "2",
};

const pageNumber217Data = {
    children: "3",
};

const pageNumber218Data = {
    children: "4",
};

const pageNumber219Data = {
    children: "5",
};

const pageNumber310Data = {
    children: "6",
};

const pageNumber220Data = {
    children: "7",
};

const pageNumber311Data = {
    children: "8",
};

const pageNumber312Data = {
    children: "9",
};

const arrow8Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-10.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages4Data = {
    arrow1Props: arrow7Data,
    pageNumber21Props: pageNumber216Data,
    pageNumber22Props: pageNumber217Data,
    pageNumber23Props: pageNumber218Data,
    pageNumber24Props: pageNumber219Data,
    pageNumber25Props: pageNumber310Data,
    pageNumber26Props: pageNumber220Data,
    pageNumber27Props: pageNumber311Data,
    pageNumber28Props: pageNumber312Data,
    arrow2Props: arrow8Data,
};

const page4Data = {
    pagesProps: pages4Data,
};

const dropdown4Data = {
    src: "/img/icon-28.svg",
};

const button4Data = {
    dropdownProps: dropdown4Data,
};

const pagination34Data = {
    showPageProps: information4Data,
    pagesProps: page4Data,
    goToProps2: button4Data,
};

const userInteraction1Data = {
    click2: "",
};

const screen10Data = {
    itemName1: "Current Reports",
    itemName2: "My Reports",
    itemName3: "Submitted Reports",
    label: "Macro Site",
    headerProps: header4Data,
    pageHeading3Props: pageHeading34Data,
    cards3Props: cards3Data,
    tableHeaderProps: tableHeader5Data,
    icon32Props: icon324Data,
    searchInputProps: searchInput4Data,
    divider21Props: divider212Data,
    columnHeader6Props: columnHeader63Data,
    divider22Props: divider213Data,
    table221Props: table2212Data,
    table2Props: table24Data,
    table52Props: table525Data,
    cell07Text31Props: cell07Text33Data,
    divider1Props: divider39Data,
    tableRow2Props: tableRow23Data,
    table222Props: table2214Data,
    cell04Text2Props: cell04Text25Data,
    cell05Text2Props: cell05Text29Data,
    cell07Text32Props: cell07Text34Data,
    divider2Props: divider41Data,
    tableRow4Props: tableRow43Data,
    tableRow5Props: tableRow53Data,
    tableRow6Props: tableRow63Data,
    scrollbarProps: scrollbar4Data,
    pagination3Props: pagination34Data,
    userInteractionProps: userInteraction1Data,
};

const menuLogo5Data = {
    className: "menu-logo-4",
};

const icon229Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-4",
};

const frame187Data = {
    icon22Props: icon229Data,
};

const aTOMSICON2019notification5Data = {
    className: "atomsicon2019notification-4",
};

const aTOMSICON2019support5Data = {
    className: "atomsicon2019chat-copy-4",
};

const aTOMSAVATARDEFAULT5Data = {
    className: "atomsavatardefault-4",
};

const header5Data = {
    menuLogoProps: menuLogo5Data,
    frame18Props: frame187Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification5Data,
    aTOMSICON2019supportProps: aTOMSICON2019support5Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT5Data,
};

const divider46Data = {
    className: "atomsdividersline2-pxblack-4",
};

const pageHeading35Data = {
    dividerProps: divider46Data,
};

const card33Data = {
    label1: "All",
    label2: "104",
    label3: "",
};

const divider47Data = {
    className: "divider-4",
};

const divider214Data = {
    className: "",
};

const tableHeader6Data = {
    dividerProps: divider47Data,
    dividerProps2: divider214Data,
};

const saveGridSettings5Data = {
    className: "",
};

const icon325Data = {
    saveGridSettingsProps: saveGridSettings5Data,
};

const icon2210Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1835Data = {
    icon22Props: icon2210Data,
};

const searchInput5Data = {
    className: "",
    frame183Props: frame1835Data,
};

const divider215Data = {
    className: "divider-20",
};

const actionBar2Data = {
    icon32Props: icon325Data,
    icon32Props2: searchInput5Data,
    divider2Props: divider215Data,
};

const columnHeader54Data = {
    className: "column-header-5-3",
};

const text44Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader64Data = {
    className: "column-header-6-3",
    text4Props: text44Data,
};

const columnHeader73Data = {
    className: "column-header-7-2",
};

const divider216Data = {
    className: "divider-21",
};

const table2218Data = {
    src: "/img/icon.svg",
};

const state30Data = {
    className: "rectangle-5-8",
};

const statusIndicator513Data = {
    stateProps: state30Data,
};

const cell06Text2219Data = {
    className: "cell-06-text-12",
};

const textIcon3316Data = {
    children: "Tom Parker",
};

const cell07Text222Data = {
    textIcon3Props: textIcon3316Data,
};

const divider48Data = {
    className: "divider-4",
};

const table2219Data = {
    src: "/img/icon.svg",
};

const table3225Data = {
    className: "cell-02-text-7",
};

const cell04Text42Data = {
    label: "Final Pending - Open",
};

const textIcon410Data = {
    children: "2 Days",
};

const table527Data = {
    className: "cell-05-text-6",
    textIcon4Props: textIcon410Data,
};

const cell06Text2220Data = {
    className: "cell-06-text-12",
};

const textIcon3317Data = {
    children: "John Carter",
};

const cell07Text223Data = {
    textIcon3Props: textIcon3317Data,
};

const divider49Data = {
    className: "divider-4",
};

const table2220Data = {
    src: "/img/icon.svg",
};

const table3226Data = {
    className: "cell-02-text-7",
};

const state32Data = {
    className: "rectangle-5-8",
};

const statusIndicator514Data = {
    stateProps: state32Data,
};

const cell04Text52Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator514Data,
};

const cell06Text2221Data = {
    className: "cell-06-text-12",
};

const textIcon3318Data = {
    children: "Tom Parker",
};

const cell07Text224Data = {
    textIcon3Props: textIcon3318Data,
};

const divider50Data = {
    className: "divider-4",
};

const table2221Data = {
    src: "/img/icon-4@2x.png",
};

const table3227Data = {
    className: "cell-02-text-7",
};

const state33Data = {
    className: "rectangle-5-8",
};

const statusIndicator515Data = {
    stateProps: state33Data,
};

const cell04Text53Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator515Data,
};

const cell06Text2222Data = {
    className: "cell-06-text-12",
};

const textIcon3319Data = {
    children: "John Carter",
};

const cell07Text225Data = {
    textIcon3Props: textIcon3319Data,
};

const divider51Data = {
    className: "divider-4",
};

const table2222Data = {
    src: "/img/icon.svg",
};

const table3228Data = {
    className: "cell-02-text-7",
};

const cell04Text43Data = {
    label: "Final Pending - Open",
};

const textIcon813Data = {
    children: "4 Hours",
};

const cell05Text213Data = {
    className: "cell-05-text-22",
    textIcon8Props: textIcon813Data,
};

const cell06Text2223Data = {
    className: "cell-06-text-12",
};

const textIcon3320Data = {
    children: "John Carter",
};

const cell07Text226Data = {
    textIcon3Props: textIcon3320Data,
};

const divider52Data = {
    className: "divider-4",
};

const table2223Data = {
    src: "/img/icon.svg",
};

const table3229Data = {
    className: "cell-02-text-7",
};

const cell04Text44Data = {
    label: "Final Pending - Open",
};

const cell06Text2224Data = {
    className: "cell-06-text-12",
};

const textIcon3321Data = {
    children: "John Carter",
};

const cell07Text227Data = {
    textIcon3Props: textIcon3321Data,
};

const divider53Data = {
    className: "divider-4",
};

const state36Data = {
    className: "scroller-5",
};

const scrollbar5Data = {
    stateProps: state36Data,
};

const inputFields6Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
};

const showPage5Data = {
    inputFieldsProps: inputFields6Data,
};

const information5Data = {
    showPageProps: showPage5Data,
};

const arrow9Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
};

const pageNumber221Data = {
    children: "2",
};

const pageNumber222Data = {
    children: "3",
};

const pageNumber223Data = {
    children: "4",
};

const pageNumber224Data = {
    children: "5",
};

const pageNumber313Data = {
    children: "6",
};

const pageNumber225Data = {
    children: "7",
};

const pageNumber314Data = {
    children: "8",
};

const pageNumber315Data = {
    children: "9",
};

const arrow10Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-10.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages5Data = {
    arrow1Props: arrow9Data,
    pageNumber21Props: pageNumber221Data,
    pageNumber22Props: pageNumber222Data,
    pageNumber23Props: pageNumber223Data,
    pageNumber24Props: pageNumber224Data,
    pageNumber25Props: pageNumber313Data,
    pageNumber26Props: pageNumber225Data,
    pageNumber27Props: pageNumber314Data,
    pageNumber28Props: pageNumber315Data,
    arrow2Props: arrow10Data,
};

const page5Data = {
    pagesProps: pages5Data,
};

const dropdown5Data = {
    src: "/img/icon-28.svg",
};

const button5Data = {
    dropdownProps: dropdown5Data,
};

const pagination35Data = {
    showPageProps: information5Data,
    pagesProps: page5Data,
    goToProps2: button5Data,
};

const dashboardTable1Data = {
    label2: "Final Pending - Open",
    tableHeaderProps: tableHeader6Data,
    actionBarProps: actionBar2Data,
    columnHeader5Props: columnHeader54Data,
    columnHeader6Props: columnHeader64Data,
    columnHeader7Props: columnHeader73Data,
    divider2Props: divider216Data,
    table221Props: table2218Data,
    statusIndicator5Props: statusIndicator513Data,
    cell06Text221Props: cell06Text2219Data,
    cell07Text221Props: cell07Text222Data,
    divider1Props: divider48Data,
    table222Props: table2219Data,
    table321Props: table3225Data,
    cell04Text41Props: cell04Text42Data,
    table52Props: table527Data,
    cell06Text222Props: cell06Text2220Data,
    cell07Text222Props: cell07Text223Data,
    divider2Props2: divider49Data,
    table223Props: table2220Data,
    table322Props: table3226Data,
    cell04Text51Props: cell04Text52Data,
    cell06Text223Props: cell06Text2221Data,
    cell07Text223Props: cell07Text224Data,
    divider3Props: divider50Data,
    table224Props: table2221Data,
    table323Props: table3227Data,
    cell04Text52Props: cell04Text53Data,
    cell06Text224Props: cell06Text2222Data,
    cell07Text224Props: cell07Text225Data,
    divider4Props: divider51Data,
    table225Props: table2222Data,
    table324Props: table3228Data,
    cell04Text42Props: cell04Text43Data,
    cell05Text2Props: cell05Text213Data,
    cell06Text225Props: cell06Text2223Data,
    cell07Text225Props: cell07Text226Data,
    divider5Props: divider52Data,
    table226Props: table2223Data,
    table325Props: table3229Data,
    cell04Text43Props: cell04Text44Data,
    cell06Text226Props: cell06Text2224Data,
    cell07Text226Props: cell07Text227Data,
    divider6Props: divider53Data,
    scrollbarProps: scrollbar5Data,
    pagination3Props: pagination35Data,
};

const userInteraction2Data = {
    click2: "",
    className: "user-interaction-1",
};

const screen08Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    headerProps: header5Data,
    pageHeading3Props: pageHeading35Data,
    card3Props: card33Data,
    dashboardTableProps: dashboardTable1Data,
    userInteractionProps: userInteraction2Data,
};

const menuLogo6Data = {
    className: "menu-logo-5",
};

const icon2211Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-5",
};

const frame188Data = {
    icon22Props: icon2211Data,
};

const aTOMSICON2019notification6Data = {
    className: "atomsicon2019notification-5",
};

const aTOMSICON2019support6Data = {
    className: "atomsicon2019chat-copy-5",
};

const aTOMSAVATARDEFAULT6Data = {
    className: "atomsavatardefault-5",
};

const header6Data = {
    menuLogoProps: menuLogo6Data,
    frame18Props: frame188Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification6Data,
    aTOMSICON2019supportProps: aTOMSICON2019support6Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT6Data,
};

const divider55Data = {
    className: "atomsdividersline2-pxblack-5",
};

const pageHeading36Data = {
    dividerProps: divider55Data,
};

const divider56Data = {
    className: "divider-5",
};

const divider217Data = {
    className: "",
};

const tableHeader7Data = {
    dividerProps: divider56Data,
    dividerProps2: divider217Data,
};

const saveGridSettings6Data = {
    className: "",
};

const icon326Data = {
    saveGridSettingsProps: saveGridSettings6Data,
};

const icon2212Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1836Data = {
    icon22Props: icon2212Data,
};

const searchInput6Data = {
    className: "",
    frame183Props: frame1836Data,
};

const divider218Data = {
    className: "divider-22",
};

const actionBar3Data = {
    icon32Props: icon326Data,
    icon32Props2: searchInput6Data,
    divider2Props: divider218Data,
};

const columnHeader55Data = {
    className: "column-header-5-4",
};

const text45Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader65Data = {
    className: "column-header-6-4",
    text4Props: text45Data,
};

const columnHeader74Data = {
    className: "column-header-7-3",
};

const divider219Data = {
    className: "divider-23",
};

const table2224Data = {
    src: "/img/icon-7.svg",
};

const state37Data = {
    className: "rectangle-5-10",
};

const statusIndicator516Data = {
    stateProps: state37Data,
};

const cell06Text2225Data = {
    className: "cell-06-text-13",
};

const textIcon3322Data = {
    children: "Tom Parker",
};

const cell07Text228Data = {
    textIcon3Props: textIcon3322Data,
};

const divider57Data = {
    className: "divider-5",
};

const table2225Data = {
    src: "/img/icon-7.svg",
};

const table3230Data = {
    className: "cell-02-text-8",
};

const cell04Text45Data = {
    label: "Final Pending - Restored",
};

const textIcon411Data = {
    children: "2 Days",
};

const table528Data = {
    className: "cell-05-text-7",
    textIcon4Props: textIcon411Data,
};

const cell06Text2226Data = {
    className: "cell-06-text-13",
};

const textIcon3323Data = {
    children: "John Carter",
};

const cell07Text229Data = {
    textIcon3Props: textIcon3323Data,
};

const divider58Data = {
    className: "divider-5",
};

const table2226Data = {
    src: "/img/icon-7.svg",
};

const table3231Data = {
    className: "cell-02-text-8",
};

const state39Data = {
    className: "rectangle-5-10",
};

const statusIndicator517Data = {
    stateProps: state39Data,
};

const cell04Text54Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator517Data,
};

const cell06Text2227Data = {
    className: "cell-06-text-13",
};

const textIcon3324Data = {
    children: "Tom Parker",
};

const cell07Text2210Data = {
    textIcon3Props: textIcon3324Data,
};

const divider59Data = {
    className: "divider-5",
};

const table2227Data = {
    src: "/img/icon-4@2x.png",
};

const table3232Data = {
    className: "cell-02-text-8",
};

const state40Data = {
    className: "rectangle-5-10",
};

const statusIndicator518Data = {
    stateProps: state40Data,
};

const cell04Text55Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator518Data,
};

const cell06Text2228Data = {
    className: "cell-06-text-13",
};

const textIcon3325Data = {
    children: "John Carter",
};

const cell07Text2211Data = {
    textIcon3Props: textIcon3325Data,
};

const divider60Data = {
    className: "divider-5",
};

const table2228Data = {
    src: "/img/icon-7.svg",
};

const table3233Data = {
    className: "cell-02-text-8",
};

const cell04Text46Data = {
    label: "Final Pending - Restored",
};

const textIcon814Data = {
    children: "4 Hours",
};

const cell05Text214Data = {
    className: "cell-05-text-23",
    textIcon8Props: textIcon814Data,
};

const cell06Text2229Data = {
    className: "cell-06-text-13",
};

const textIcon3326Data = {
    children: "John Carter",
};

const cell07Text2212Data = {
    textIcon3Props: textIcon3326Data,
};

const divider61Data = {
    className: "divider-5",
};

const table2229Data = {
    src: "/img/icon-7.svg",
};

const table3234Data = {
    className: "cell-02-text-8",
};

const cell04Text47Data = {
    label: "Final Pending - Restored",
};

const cell06Text2230Data = {
    className: "cell-06-text-13",
};

const textIcon3327Data = {
    children: "John Carter",
};

const cell07Text2213Data = {
    textIcon3Props: textIcon3327Data,
};

const divider62Data = {
    className: "divider-5",
};

const state43Data = {
    className: "scroller-6",
};

const scrollbar6Data = {
    stateProps: state43Data,
};

const inputFields7Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-7.svg",
};

const showPage6Data = {
    inputFieldsProps: inputFields7Data,
};

const information6Data = {
    showPageProps: showPage6Data,
};

const arrow11Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-22.svg",
};

const pageNumber226Data = {
    children: "2",
};

const pageNumber227Data = {
    children: "3",
};

const pageNumber228Data = {
    children: "4",
};

const pageNumber229Data = {
    children: "5",
};

const pageNumber316Data = {
    children: "6",
};

const pageNumber230Data = {
    children: "7",
};

const pageNumber317Data = {
    children: "8",
};

const pageNumber318Data = {
    children: "9",
};

const arrow12Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-10.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages6Data = {
    arrow1Props: arrow11Data,
    pageNumber21Props: pageNumber226Data,
    pageNumber22Props: pageNumber227Data,
    pageNumber23Props: pageNumber228Data,
    pageNumber24Props: pageNumber229Data,
    pageNumber25Props: pageNumber316Data,
    pageNumber26Props: pageNumber230Data,
    pageNumber27Props: pageNumber317Data,
    pageNumber28Props: pageNumber318Data,
    arrow2Props: arrow12Data,
};

const page6Data = {
    pagesProps: pages6Data,
};

const dropdown6Data = {
    src: "/img/icon-28.svg",
};

const button6Data = {
    dropdownProps: dropdown6Data,
};

const pagination36Data = {
    showPageProps: information6Data,
    pagesProps: page6Data,
    goToProps2: button6Data,
};

const dashboardTable2Data = {
    label2: "Final Pending - Restored",
    tableHeaderProps: tableHeader7Data,
    actionBarProps: actionBar3Data,
    columnHeader5Props: columnHeader55Data,
    columnHeader6Props: columnHeader65Data,
    columnHeader7Props: columnHeader74Data,
    divider2Props: divider219Data,
    table221Props: table2224Data,
    statusIndicator5Props: statusIndicator516Data,
    cell06Text221Props: cell06Text2225Data,
    cell07Text221Props: cell07Text228Data,
    divider1Props: divider57Data,
    table222Props: table2225Data,
    table321Props: table3230Data,
    cell04Text41Props: cell04Text45Data,
    table52Props: table528Data,
    cell06Text222Props: cell06Text2226Data,
    cell07Text222Props: cell07Text229Data,
    divider2Props2: divider58Data,
    table223Props: table2226Data,
    table322Props: table3231Data,
    cell04Text51Props: cell04Text54Data,
    cell06Text223Props: cell06Text2227Data,
    cell07Text223Props: cell07Text2210Data,
    divider3Props: divider59Data,
    table224Props: table2227Data,
    table323Props: table3232Data,
    cell04Text52Props: cell04Text55Data,
    cell06Text224Props: cell06Text2228Data,
    cell07Text224Props: cell07Text2211Data,
    divider4Props: divider60Data,
    table225Props: table2228Data,
    table324Props: table3233Data,
    cell04Text42Props: cell04Text46Data,
    cell05Text2Props: cell05Text214Data,
    cell06Text225Props: cell06Text2229Data,
    cell07Text225Props: cell07Text2212Data,
    divider5Props: divider61Data,
    table226Props: table2229Data,
    table325Props: table3234Data,
    cell04Text43Props: cell04Text47Data,
    cell06Text226Props: cell06Text2230Data,
    cell07Text226Props: cell07Text2213Data,
    divider6Props: divider62Data,
    scrollbarProps: scrollbar6Data,
    pagination3Props: pagination36Data,
};

const userInteraction3Data = {
    click2: "",
    className: "user-interaction-2",
};

const screen09Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "All",
    label2: "104",
    label3: "",
    label4: "Notify Pending",
    label5: "50",
    label6: "All Automated",
    label7: "Initial Pending",
    label8: "22",
    label9: "12 Non-automated Reports",
    label10: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label11: "5 Reports have less than 2 days",
    headerProps: header6Data,
    pageHeading3Props: pageHeading36Data,
    dashboardTableProps: dashboardTable2Data,
    userInteractionProps: userInteraction3Data,
};

const menuLogo7Data = {
    className: "menu-logo-6",
};

const icon2213Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-6",
};

const frame189Data = {
    icon22Props: icon2213Data,
};

const aTOMSICON2019notification7Data = {
    className: "atomsicon2019notification-6",
};

const aTOMSICON2019support7Data = {
    className: "atomsicon2019chat-copy-6",
};

const aTOMSAVATARDEFAULT7Data = {
    className: "atomsavatardefault-6",
};

const header7Data = {
    menuLogoProps: menuLogo7Data,
    frame18Props: frame189Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification7Data,
    aTOMSICON2019supportProps: aTOMSICON2019support7Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT7Data,
};

const divider64Data = {
    className: "atomsdividersline2-pxblack-6",
};

const pageHeading37Data = {
    dividerProps: divider64Data,
};

const card75Data = {
    className: "initial-report-a",
};

const divider65Data = {
    className: "divider-6",
};

const divider220Data = {
    className: "atomsdividersline2-pxblack-17",
};

const tableHeader8Data = {
    dividerProps: divider65Data,
    dividerProps2: divider220Data,
};

const saveGridSettings7Data = {
    className: "save_-grid_-settings-6",
};

const icon327Data = {
    saveGridSettingsProps: saveGridSettings7Data,
};

const icon2214Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1837Data = {
    icon22Props: icon2214Data,
};

const searchInput7Data = {
    className: "search-input-6",
    frame183Props: frame1837Data,
};

const divider221Data = {
    className: "divider-24",
};

const actionBar4Data = {
    className: "action-bar-4",
    icon32Props: icon327Data,
    icon32Props2: searchInput7Data,
    divider2Props: divider221Data,
};

const text46Data = {
    children: "Status",
    className: "text-52",
};

const columnHeader66Data = {
    className: "column-header-4-6",
    text4Props: text46Data,
};

const columnHeader56Data = {
    className: "column-header-5-5",
};

const text47Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader67Data = {
    className: "column-header-6-5",
    text4Props: text47Data,
};

const columnHeader75Data = {
    className: "column-header-7-4",
};

const divider222Data = {
    className: "divider-25",
};

const table2230Data = {
    src: "/img/icon.svg",
};

const cell06Text2231Data = {
    className: "cell-06-text-14",
};

const divider66Data = {
    className: "divider-6",
};

const table2231Data = {
    src: "/img/icon.svg",
};

const statusIndicator221Data = {
    className: "",
};

const table51Data = {
    statusIndicator22Props: statusIndicator221Data,
};

const cell06Text2232Data = {
    className: "cell-06-text-14",
};

const textIcon3328Data = {
    children: "John Carter",
    className: "text-icon-70-1",
};

const cell07Text71Data = {
    textIcon33Props: textIcon3328Data,
};

const divider67Data = {
    className: "divider-6",
};

const tableRow232Data = {
    table22Props: table2231Data,
    table5Props: table51Data,
    cell06Text22Props: cell06Text2232Data,
    cell07Text7Props: cell07Text71Data,
    dividerProps: divider67Data,
};

const table2232Data = {
    src: "/img/icon.svg",
};

const state45Data = {
    className: "rectangle-5-20",
};

const statusIndicator519Data = {
    stateProps: state45Data,
};

const textIcon815Data = {
    children: "4 Hours",
};

const cell05Text215Data = {
    className: "cell-05-text-20",
    textIcon8Props: textIcon815Data,
};

const cell06Text2233Data = {
    className: "cell-06-text-14",
};

const divider68Data = {
    className: "divider-6",
};

const table2233Data = {
    src: "/img/icon-4@2x.png",
};

const statusIndicator222Data = {
    className: "status-indicator-11",
};

const table53Data = {
    statusIndicator22Props: statusIndicator222Data,
};

const textIcon816Data = {
    children: "4 Hours",
};

const cell05Text216Data = {
    className: "cell-05-text-20",
    textIcon8Props: textIcon816Data,
};

const cell06Text2234Data = {
    className: "cell-06-text-14",
};

const textIcon3329Data = {
    children: "John Carter",
    className: "text-icon-70-2",
};

const cell07Text72Data = {
    textIcon33Props: textIcon3329Data,
};

const divider69Data = {
    className: "divider-6",
};

const table2234Data = {
    src: "/img/icon.svg",
};

const statusIconBig34Data = {
    className: "status-icon-big-3",
};

const textIcon817Data = {
    children: "4 Hours",
};

const cell05Text217Data = {
    className: "cell-05-text-20",
    textIcon8Props: textIcon817Data,
};

const cell06Text2235Data = {
    className: "cell-06-text-14",
};

const textIcon3330Data = {
    children: "John Carter",
    className: "text-icon-70-3",
};

const cell07Text73Data = {
    textIcon33Props: textIcon3330Data,
};

const divider70Data = {
    className: "divider-6",
};

const table2235Data = {
    src: "/img/icon.svg",
};

const statusIndicator223Data = {
    className: "",
};

const table54Data = {
    statusIndicator22Props: statusIndicator223Data,
};

const cell06Text2236Data = {
    className: "cell-06-text-14",
};

const textIcon3331Data = {
    children: "John Carter",
    className: "text-icon-70",
};

const cell07Text74Data = {
    textIcon33Props: textIcon3331Data,
};

const divider71Data = {
    className: "divider-6",
};

const tableRow233Data = {
    table22Props: table2235Data,
    table5Props: table54Data,
    cell06Text22Props: cell06Text2236Data,
    cell07Text7Props: cell07Text74Data,
    dividerProps: divider71Data,
};

const state46Data = {
    className: "scroller-7",
};

const scrollbar7Data = {
    stateProps: state46Data,
};

const arrow13Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
};

const pageNumber521Data = {
    children: "2",
};

const pageNumber522Data = {
    children: "3",
};

const pageNumber523Data = {
    children: "4",
};

const pageNumber524Data = {
    children: "5",
};

const pageNumber61Data = {
    children: "6",
};

const pageNumber525Data = {
    children: "7",
};

const pageNumber62Data = {
    children: "8",
};

const pageNumber63Data = {
    children: "9",
};

const arrow14Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-40.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const userInteraction4Data = {
    click2: "",
    className: "user-interaction-3",
};

const screen07Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "All",
    label2: "104",
    label3: "",
    label4: "Notify Pending",
    label5: "50",
    label6: "All Automated",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    label12: "Goverment ID",
    label13: "Initial Pending",
    label14: "Initial Pending",
    label15: "Initial Pending",
    placeholderText1: "5",
    displaying5Of50Rows: "Displaying 5 of 50 Rows",
    placeholderText2: "1",
    placeholderText3: "10",
    placeholderText4: "2",
    text7: "/ 20",
    headerProps: header7Data,
    pageHeading3Props: pageHeading37Data,
    card7Props: card75Data,
    tableHeaderProps: tableHeader8Data,
    actionBarProps: actionBar4Data,
    columnHeader61Props: columnHeader66Data,
    columnHeader5Props: columnHeader56Data,
    columnHeader62Props: columnHeader67Data,
    columnHeader7Props: columnHeader75Data,
    divider2Props: divider222Data,
    table221Props: table2230Data,
    cell06Text221Props: cell06Text2231Data,
    divider1Props: divider66Data,
    tableRow231Props: tableRow232Data,
    table222Props: table2232Data,
    statusIndicator5Props: statusIndicator519Data,
    cell05Text21Props: cell05Text215Data,
    cell06Text222Props: cell06Text2233Data,
    divider2Props2: divider68Data,
    table223Props: table2233Data,
    table5Props: table53Data,
    cell05Text22Props: cell05Text216Data,
    cell06Text223Props: cell06Text2234Data,
    cell07Text71Props: cell07Text72Data,
    divider3Props: divider69Data,
    table224Props: table2234Data,
    statusIconBig3Props: statusIconBig34Data,
    cell05Text23Props: cell05Text217Data,
    cell06Text224Props: cell06Text2235Data,
    cell07Text72Props: cell07Text73Data,
    divider4Props: divider70Data,
    tableRow232Props: tableRow233Data,
    scrollbarProps: scrollbar7Data,
    arrow1Props: arrow13Data,
    pageNumber521Props: pageNumber521Data,
    pageNumber522Props: pageNumber522Data,
    pageNumber523Props: pageNumber523Data,
    pageNumber524Props: pageNumber524Data,
    pageNumber61Props: pageNumber61Data,
    pageNumber525Props: pageNumber525Data,
    pageNumber62Props: pageNumber62Data,
    pageNumber63Props: pageNumber63Data,
    arrow2Props: arrow14Data,
    userInteractionProps: userInteraction4Data,
};

const menuLogo8Data = {
    className: "menu-logo-7",
};

const icon2215Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-7",
};

const frame1810Data = {
    icon22Props: icon2215Data,
};

const aTOMSICON2019notification8Data = {
    className: "atomsicon2019notification-7",
};

const aTOMSICON2019support8Data = {
    className: "atomsicon2019chat-copy-7",
};

const aTOMSAVATARDEFAULT8Data = {
    className: "atomsavatardefault-7",
};

const header8Data = {
    menuLogoProps: menuLogo8Data,
    frame18Props: frame1810Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification8Data,
    aTOMSICON2019supportProps: aTOMSICON2019support8Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT8Data,
};

const divider73Data = {
    className: "atomsdividersline2-pxblack-7",
};

const pageHeading38Data = {
    dividerProps: divider73Data,
};

const divider74Data = {
    className: "divider-7",
};

const divider223Data = {
    className: "",
};

const tableHeader9Data = {
    dividerProps: divider74Data,
    dividerProps2: divider223Data,
};

const saveGridSettings8Data = {
    className: "",
};

const icon328Data = {
    saveGridSettingsProps: saveGridSettings8Data,
};

const icon2216Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1838Data = {
    icon22Props: icon2216Data,
};

const searchInput8Data = {
    className: "",
    frame183Props: frame1838Data,
};

const divider224Data = {
    className: "divider-26",
};

const actionBar5Data = {
    icon32Props: icon328Data,
    icon32Props2: searchInput8Data,
    divider2Props: divider224Data,
};

const text48Data = {
    children: "Workbench - Remedy",
};

const divider225Data = {
    className: "divider-27",
};

const table2236Data = {
    src: "/img/icon.svg",
};

const textIcon66Data = {
    className: "text-icon-11",
};

const cell02Text51Data = {
    textIconProps: textIcon66Data,
};

const state47Data = {
    className: "rectangle-5-11",
};

const statusIndicator520Data = {
    stateProps: state47Data,
};

const textIcon112Data = {
    label: "Clocking",
    statusIndicator5Props: statusIndicator520Data,
};

const cell04Text81Data = {
    textIcon11Props: textIcon112Data,
};

const textIcon818Data = {
    children: "2 Hours",
};

const cell05Text218Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon818Data,
};

const divider75Data = {
    className: "divider-7",
};

const table2237Data = {
    src: "/img/icon.svg",
};

const textIcon67Data = {
    className: "",
};

const cell02Text52Data = {
    className: "cell-02-text-12",
    textIconProps: textIcon67Data,
};

const state48Data = {
    className: "rectangle-5-11",
};

const statusIndicator521Data = {
    stateProps: state48Data,
};

const textIcon113Data = {
    label: "Clocking",
    statusIndicator5Props: statusIndicator521Data,
};

const cell04Text82Data = {
    textIcon11Props: textIcon113Data,
};

const textIcon819Data = {
    children: "2 Hours",
};

const cell05Text219Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon819Data,
};

const cell06Text32Data = {
    className: "cell-06-text-16",
};

const textIcon3332Data = {
    children: "John Carter",
};

const cell07Text51Data = {
    textIcon3Props: textIcon3332Data,
};

const divider76Data = {
    className: "divider-7",
};

const tableRow2322Data = {
    table22Props: table2237Data,
    cell02Text5Props: cell02Text52Data,
    cell04Text8Props: cell04Text82Data,
    cell05Text2Props: cell05Text219Data,
    cell05Text2Props2: cell06Text32Data,
    cell07Text5Props: cell07Text51Data,
    dividerProps: divider76Data,
};

const table2238Data = {
    src: "/img/icon.svg",
};

const textIcon68Data = {
    className: "",
};

const cell02Text53Data = {
    className: "cell-02-text-12",
    textIconProps: textIcon68Data,
};

const state49Data = {
    className: "rectangle-5-11",
};

const statusIndicator522Data = {
    stateProps: state49Data,
};

const textIcon114Data = {
    label: "Clocking",
    statusIndicator5Props: statusIndicator522Data,
};

const cell04Text83Data = {
    textIcon11Props: textIcon114Data,
};

const textIcon820Data = {
    children: "2 Hours",
};

const cell05Text220Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon820Data,
};

const cell06Text33Data = {
    className: "cell-06-text-16",
};

const textIcon3210Data = {
    children: "Tom Parker",
    className: "text-icon-50-1",
};

const cell07Text91Data = {
    textIcon32Props: textIcon3210Data,
};

const divider77Data = {
    className: "divider-7",
};

const table2239Data = {
    src: "/img/icon.svg",
};

const textIcon69Data = {
    className: "",
};

const cell02Text54Data = {
    className: "cell-02-text-12",
    textIconProps: textIcon69Data,
};

const state50Data = {
    className: "rectangle-5-21",
};

const statusIndicator523Data = {
    stateProps: state50Data,
};

const textIcon115Data = {
    label: "Notify Pending",
    statusIndicator5Props: statusIndicator523Data,
};

const cell04Text84Data = {
    textIcon11Props: textIcon115Data,
};

const textIcon821Data = {
    children: "4 Hours",
};

const cell05Text221Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon821Data,
};

const cell06Text34Data = {
    className: "cell-06-text-16",
};

const textIcon3333Data = {
    children: "John Carter",
};

const cell07Text52Data = {
    textIcon3Props: textIcon3333Data,
};

const divider78Data = {
    className: "divider-7",
};

const tableRow2323Data = {
    table22Props: table2239Data,
    cell02Text5Props: cell02Text54Data,
    cell04Text8Props: cell04Text84Data,
    cell05Text2Props: cell05Text221Data,
    cell05Text2Props2: cell06Text34Data,
    cell07Text5Props: cell07Text52Data,
    dividerProps: divider78Data,
};

const table2240Data = {
    src: "/img/icon.svg",
};

const textIcon70Data = {
    className: "",
};

const cell02Text55Data = {
    className: "cell-02-text-12",
    textIconProps: textIcon70Data,
};

const statusIconBig35Data = {
    className: "status-icon-big-4",
};

const textIcon822Data = {
    children: "2 Hours",
};

const cell05Text222Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon822Data,
};

const cell06Text35Data = {
    className: "cell-06-text-16",
};

const textIcon3211Data = {
    children: "John Carter",
    className: "text-icon-50",
};

const cell07Text92Data = {
    textIcon32Props: textIcon3211Data,
};

const divider79Data = {
    className: "divider-7",
};

const table2241Data = {
    src: "/img/icon.svg",
};

const textIcon71Data = {
    className: "",
};

const cell02Text56Data = {
    className: "cell-02-text-12",
    textIconProps: textIcon71Data,
};

const textIcon823Data = {
    children: "2 Hours",
};

const cell05Text223Data = {
    className: "cell-05-text-21",
    textIcon8Props: textIcon823Data,
};

const cell06Text36Data = {
    className: "cell-06-text-16",
};

const textIcon3334Data = {
    children: "John Carter",
};

const cell07Text53Data = {
    textIcon3Props: textIcon3334Data,
};

const divider80Data = {
    className: "divider-7",
};

const state52Data = {
    className: "scroller-8",
};

const scrollbar8Data = {
    stateProps: state52Data,
};

const inputFields8Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
};

const showPage7Data = {
    inputFieldsProps: inputFields8Data,
};

const information7Data = {
    showPageProps: showPage7Data,
};

const arrow15Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
};

const pageNumber231Data = {
    children: "2",
};

const pageNumber232Data = {
    children: "3",
};

const pageNumber233Data = {
    children: "4",
};

const pageNumber234Data = {
    children: "5",
};

const pageNumber319Data = {
    children: "6",
};

const pageNumber235Data = {
    children: "7",
};

const pageNumber320Data = {
    children: "8",
};

const pageNumber321Data = {
    children: "9",
};

const arrow16Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-40.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages7Data = {
    arrow1Props: arrow15Data,
    pageNumber21Props: pageNumber231Data,
    pageNumber22Props: pageNumber232Data,
    pageNumber23Props: pageNumber233Data,
    pageNumber24Props: pageNumber234Data,
    pageNumber25Props: pageNumber319Data,
    pageNumber26Props: pageNumber235Data,
    pageNumber27Props: pageNumber320Data,
    pageNumber28Props: pageNumber321Data,
    arrow2Props: arrow16Data,
};

const page7Data = {
    pagesProps: pages7Data,
};

const dropdown7Data = {
    src: "/img/icon-49.svg",
};

const button7Data = {
    dropdownProps: dropdown7Data,
};

const pagination37Data = {
    showPageProps: information7Data,
    pagesProps: page7Data,
    goToProps2: button7Data,
};

const userInteraction5Data = {
    click2: "",
    className: "user-interaction-4",
};

const screen06Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "All",
    label2: "104",
    label3: "",
    label4: "Notify Pending",
    label5: "50",
    label6: "All Automated",
    label7: "Initial Pending",
    label8: "22",
    label9: "12 Non-automated Reports",
    label10: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label11: "5 Reports have less than 2 days",
    label12: "Final Pending - Restored",
    label13: "14",
    label14: "12 Unassigned Reports",
    label15: "Status",
    label16: "Notify Pending",
    label17: "Notify Pending",
    headerProps: header8Data,
    pageHeading3Props: pageHeading38Data,
    tableHeaderProps: tableHeader9Data,
    actionBarProps: actionBar5Data,
    text4Props: text48Data,
    divider2Props: divider225Data,
    table221Props: table2236Data,
    cell02Text51Props: cell02Text51Data,
    cell04Text81Props: cell04Text81Data,
    cell05Text21Props: cell05Text218Data,
    divider1Props: divider75Data,
    tableRow2321Props: tableRow2322Data,
    table222Props: table2238Data,
    cell02Text52Props: cell02Text53Data,
    cell04Text82Props: cell04Text83Data,
    cell05Text22Props: cell05Text220Data,
    cell06Text31Props: cell06Text33Data,
    cell07Text91Props: cell07Text91Data,
    divider2Props2: divider77Data,
    tableRow2322Props: tableRow2323Data,
    table223Props: table2240Data,
    cell02Text53Props: cell02Text55Data,
    statusIconBig3Props: statusIconBig35Data,
    cell05Text23Props: cell05Text222Data,
    cell06Text32Props: cell06Text35Data,
    cell07Text92Props: cell07Text92Data,
    divider3Props: divider79Data,
    table224Props: table2241Data,
    cell02Text54Props: cell02Text56Data,
    cell05Text24Props: cell05Text223Data,
    cell06Text33Props: cell06Text36Data,
    cell07Text5Props: cell07Text53Data,
    divider4Props: divider80Data,
    scrollbarProps: scrollbar8Data,
    pagination3Props: pagination37Data,
    userInteractionProps: userInteraction5Data,
};

const menuLogo9Data = {
    className: "menu-logo-8",
};

const icon2217Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-8",
};

const frame1811Data = {
    icon22Props: icon2217Data,
};

const aTOMSICON2019notification9Data = {
    className: "atomsicon2019notification-8",
};

const aTOMSICON2019support9Data = {
    className: "",
};

const aTOMSAVATARDEFAULT9Data = {
    className: "atomsavatardefault-8",
};

const header9Data = {
    menuLogoProps: menuLogo9Data,
    frame18Props: frame1811Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification9Data,
    aTOMSICON2019supportProps: aTOMSICON2019support9Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT9Data,
};

const divider82Data = {
    className: "atomsdividersline2-pxblack-8",
};

const pageHeading39Data = {
    dividerProps: divider82Data,
};

const divider83Data = {
    className: "divider-8",
};

const divider226Data = {
    className: "",
};

const tableHeader10Data = {
    dividerProps: divider83Data,
    dividerProps2: divider226Data,
};

const saveGridSettings9Data = {
    className: "",
};

const icon329Data = {
    saveGridSettingsProps: saveGridSettings9Data,
};

const icon2218Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame1839Data = {
    icon22Props: icon2218Data,
};

const searchInput9Data = {
    frame183Props: frame1839Data,
};

const divider227Data = {
    className: "divider-28",
};

const text49Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader68Data = {
    text4Props: text49Data,
};

const divider228Data = {
    className: "divider-29",
};

const tableHeader23Data = {
    columnHeader25Props: columnHeader68Data,
    divider2Props: divider228Data,
};

const table2242Data = {
    src: "/img/icon-29.svg",
};

const textIcon311Data = {
    children: "Final Pending - Open",
};

const table25Data = {
    textIcon3Props: textIcon311Data,
};

const textIcon412Data = {
    children: "5 Days",
};

const table529Data = {
    textIcon4Props: textIcon412Data,
};

const textIcon3212Data = {
    children: "--",
};

const table625Data = {
    textIcon3Props: textIcon3212Data,
};

const divider84Data = {
    className: "divider-8",
};

const tableRow13Data = {
    table22Props: table2242Data,
    table2Props: table25Data,
    table52Props: table529Data,
    table62Props: table625Data,
    dividerProps: divider84Data,
};

const table2243Data = {
    src: "/img/icon-29.svg",
};

const cell04Text9Data = {
    label: "Final Pending - Open",
};

const textIcon413Data = {
    children: "2 Days",
};

const table5210Data = {
    textIcon4Props: textIcon413Data,
};

const cell06Text2238Data = {
    className: "cell-06-text-7",
};

const textIcon3335Data = {
    children: "John Cart",
};

const cell07Text210Data = {
    textIcon33Props: textIcon3335Data,
};

const divider85Data = {
    className: "divider-8",
};

const tableRow24Data = {
    table22Props: table2243Data,
    cell04TextProps: cell04Text9Data,
    table52Props: table5210Data,
    cell06Text22Props: cell06Text2238Data,
    cell07Text2Props: cell07Text210Data,
    dividerProps: divider85Data,
};

const table2244Data = {
    src: "/img/icon-29.svg",
};

const state54Data = {
    className: "rectangle-5-13",
};

const statusIndicator524Data = {
    stateProps: state54Data,
};

const cell04Text27Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator524Data,
};

const textIcon824Data = {
    children: "20 Days",
};

const cell05Text224Data = {
    textIcon8Props: textIcon824Data,
};

const textIcon3213Data = {
    children: "--",
};

const table626Data = {
    textIcon3Props: textIcon3213Data,
};

const divider86Data = {
    className: "divider-8",
};

const tableRow33Data = {
    table22Props: table2244Data,
    cell04Text2Props: cell04Text27Data,
    cell05Text2Props: cell05Text224Data,
    table62Props: table626Data,
    dividerProps: divider86Data,
};

const table2245Data = {
    src: "/img/icon-4@2x.png",
};

const state55Data = {
    className: "rectangle-5-13",
};

const statusIndicator525Data = {
    stateProps: state55Data,
};

const cell04Text28Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator525Data,
};

const textIcon825Data = {
    children: "20 Days",
};

const cell05Text225Data = {
    textIcon8Props: textIcon825Data,
};

const cell06Text2240Data = {
    className: "cell-06-text-7",
};

const textIcon3336Data = {
    children: "John Cart",
};

const cell07Text211Data = {
    textIcon33Props: textIcon3336Data,
};

const divider87Data = {
    className: "divider-8",
};

const tableRow44Data = {
    table22Props: table2245Data,
    cell04Text2Props: cell04Text28Data,
    cell05Text2Props: cell05Text225Data,
    cell06Text22Props: cell06Text2240Data,
    cell07Text2Props: cell07Text211Data,
    dividerProps: divider87Data,
};

const table2246Data = {
    src: "/img/icon-29.svg",
};

const textIcon312Data = {
    children: "Initial Pending",
};

const textIcon826Data = {
    children: "4 Hours",
};

const cell05Text226Data = {
    className: "cell-05-text-15",
    textIcon8Props: textIcon826Data,
};

const textIcon3214Data = {
    children: "John Cart",
    className: "text-icon-51",
};

const cell07Text36Data = {
    textIcon32Props: textIcon3214Data,
};

const divider88Data = {
    className: "divider-8",
};

const table2247Data = {
    src: "/img/icon-29.svg",
};

const cell04Text10Data = {
    label: "Initial Pending",
};

const textIcon827Data = {
    children: "4 Hours",
};

const cell05Text227Data = {
    className: "cell-05-text-15",
    textIcon8Props: textIcon827Data,
};

const cell06Text2242Data = {
    className: "cell-06-text-7",
};

const textIcon3337Data = {
    children: "John Cart",
};

const cell07Text212Data = {
    textIcon33Props: textIcon3337Data,
};

const divider89Data = {
    className: "divider-8",
};

const tableRow64Data = {
    table22Props: table2247Data,
    cell04TextProps: cell04Text10Data,
    cell05Text2Props: cell05Text227Data,
    cell06Text22Props: cell06Text2242Data,
    cell07Text2Props: cell07Text212Data,
    dividerProps: divider89Data,
};

const state57Data = {
    className: "scroller-9",
};

const scrollbar9Data = {
    stateProps: state57Data,
};

const inputFields9Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-49.svg",
};

const showPage8Data = {
    inputFieldsProps: inputFields9Data,
};

const information8Data = {
    showPageProps: showPage8Data,
};

const arrow17Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-51.svg",
};

const pageNumber236Data = {
    children: "2",
};

const pageNumber237Data = {
    children: "3",
};

const pageNumber238Data = {
    children: "4",
};

const pageNumber239Data = {
    children: "5",
};

const pageNumber322Data = {
    children: "6",
};

const pageNumber240Data = {
    children: "7",
};

const pageNumber323Data = {
    children: "8",
};

const pageNumber324Data = {
    children: "9",
};

const arrow18Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-52.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages8Data = {
    arrow1Props: arrow17Data,
    pageNumber21Props: pageNumber236Data,
    pageNumber22Props: pageNumber237Data,
    pageNumber23Props: pageNumber238Data,
    pageNumber24Props: pageNumber239Data,
    pageNumber25Props: pageNumber322Data,
    pageNumber26Props: pageNumber240Data,
    pageNumber27Props: pageNumber323Data,
    pageNumber28Props: pageNumber324Data,
    arrow2Props: arrow18Data,
};

const page8Data = {
    pagesProps: pages8Data,
};

const dropdown8Data = {
    src: "/img/icon-49.svg",
};

const button8Data = {
    dropdownProps: dropdown8Data,
};

const pagination38Data = {
    showPageProps: information8Data,
    pagesProps: page8Data,
    goToProps2: button8Data,
};

const tooltipTitle31Data = {
    children: "Auto - Update Report to FCC",
};

const stroke1Data = {
    textCopy: "The report is configured to auto - update the infomation on the FCC system.",
    tooltipTitle3Props: tooltipTitle31Data,
};

const screen03Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    headerProps: header9Data,
    pageHeading3Props: pageHeading39Data,
    tableHeaderProps: tableHeader10Data,
    icon32Props: icon329Data,
    searchInputProps: searchInput9Data,
    divider2Props: divider227Data,
    tableHeader2Props: tableHeader23Data,
    tableRow1Props: tableRow13Data,
    tableRow2Props: tableRow24Data,
    tableRow3Props: tableRow33Data,
    tableRow4Props: tableRow44Data,
    table22Props: table2246Data,
    textIcon3Props: textIcon312Data,
    cell05Text2Props: cell05Text226Data,
    cell07Text3Props: cell07Text36Data,
    dividerProps: divider88Data,
    tableRow6Props: tableRow64Data,
    scrollbarProps: scrollbar9Data,
    pagination3Props: pagination38Data,
    strokeProps: stroke1Data,
};

const menuLogo10Data = {
    className: "menu-logo-9",
};

const icon2219Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-9",
};

const frame1812Data = {
    icon22Props: icon2219Data,
};

const aTOMSICON2019notification10Data = {
    className: "atomsicon2019notification-9",
};

const aTOMSICON2019support10Data = {
    className: "atomsicon2019chat-copy-9",
};

const aTOMSAVATARDEFAULT10Data = {
    className: "atomsavatardefault-9",
};

const header10Data = {
    menuLogoProps: menuLogo10Data,
    frame18Props: frame1812Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification10Data,
    aTOMSICON2019supportProps: aTOMSICON2019support10Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT10Data,
};

const divider91Data = {
    className: "atomsdividersline2-pxblack-9",
};

const pageHeading310Data = {
    dividerProps: divider91Data,
};

const divider92Data = {
    className: "divider-9",
};

const divider229Data = {
    className: "",
};

const tableHeader11Data = {
    dividerProps: divider92Data,
    dividerProps2: divider229Data,
};

const saveGridSettings10Data = {
    className: "",
};

const icon3210Data = {
    saveGridSettingsProps: saveGridSettings10Data,
};

const icon2220Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame18310Data = {
    icon22Props: icon2220Data,
};

const searchInput10Data = {
    frame183Props: frame18310Data,
};

const divider230Data = {
    className: "divider-30",
};

const text410Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader69Data = {
    text4Props: text410Data,
};

const divider231Data = {
    className: "divider-31",
};

const tableHeader24Data = {
    columnHeader25Props: columnHeader69Data,
    divider2Props: divider231Data,
};

const table2248Data = {
    src: "/img/icon-29.svg",
};

const textIcon313Data = {
    children: "Final Pending - Open",
};

const textIcon414Data = {
    children: "5 Days",
};

const table5211Data = {
    textIcon4Props: textIcon414Data,
};

const textIcon3215Data = {
    children: "--",
};

const table627Data = {
    textIcon3Props: textIcon3215Data,
};

const divider93Data = {
    className: "divider-9",
};

const table2249Data = {
    src: "/img/icon-29.svg",
};

const cell04Text11Data = {
    label: "Final Pending - Open",
};

const textIcon415Data = {
    children: "2 Days",
};

const table5212Data = {
    textIcon4Props: textIcon415Data,
};

const cell06Text2244Data = {
    className: "cell-06-text-9",
};

const textIcon3338Data = {
    children: "John Cart",
};

const cell07Text213Data = {
    textIcon33Props: textIcon3338Data,
};

const divider94Data = {
    className: "divider-9",
};

const tableRow25Data = {
    table22Props: table2249Data,
    cell04TextProps: cell04Text11Data,
    table52Props: table5212Data,
    cell06Text22Props: cell06Text2244Data,
    cell07Text2Props: cell07Text213Data,
    dividerProps: divider94Data,
};

const table2250Data = {
    src: "/img/icon-29.svg",
};

const state59Data = {
    className: "rectangle-5-15",
};

const statusIndicator526Data = {
    stateProps: state59Data,
};

const cell04Text29Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator526Data,
};

const textIcon828Data = {
    children: "20 Days",
};

const cell05Text228Data = {
    textIcon8Props: textIcon828Data,
};

const textIcon3216Data = {
    children: "--",
};

const table628Data = {
    textIcon3Props: textIcon3216Data,
};

const divider95Data = {
    className: "divider-9",
};

const tableRow34Data = {
    table22Props: table2250Data,
    cell04Text2Props: cell04Text29Data,
    cell05Text2Props: cell05Text228Data,
    table62Props: table628Data,
    dividerProps: divider95Data,
};

const table2251Data = {
    src: "/img/icon-4@2x.png",
};

const state60Data = {
    className: "rectangle-5-15",
};

const statusIndicator527Data = {
    stateProps: state60Data,
};

const cell04Text210Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator527Data,
};

const textIcon829Data = {
    children: "20 Days",
};

const cell05Text229Data = {
    textIcon8Props: textIcon829Data,
};

const cell06Text2246Data = {
    className: "cell-06-text-9",
};

const textIcon3339Data = {
    children: "John Cart",
};

const cell07Text214Data = {
    textIcon33Props: textIcon3339Data,
};

const divider96Data = {
    className: "divider-9",
};

const tableRow45Data = {
    table22Props: table2251Data,
    cell04Text2Props: cell04Text210Data,
    cell05Text2Props: cell05Text229Data,
    cell06Text22Props: cell06Text2246Data,
    cell07Text2Props: cell07Text214Data,
    dividerProps: divider96Data,
};

const table2252Data = {
    src: "/img/icon-29.svg",
};

const statusIconBig36Data = {
    className: "",
};

const textIcon314Data = {
    children: "Initial Pending",
};

const textIcon830Data = {
    children: "4 Hours",
};

const cell05Text230Data = {
    className: "cell-05-text-17",
    textIcon8Props: textIcon830Data,
};

const textIcon3217Data = {
    children: "John Cart",
    className: "text-icon-52",
};

const cell07Text37Data = {
    textIcon32Props: textIcon3217Data,
};

const divider97Data = {
    className: "divider-9",
};

const tableRow54Data = {
    table22Props: table2252Data,
    statusIconBig3Props: statusIconBig36Data,
    textIcon3Props: textIcon314Data,
    cell05Text2Props: cell05Text230Data,
    cell07Text3Props: cell07Text37Data,
    dividerProps: divider97Data,
};

const table2253Data = {
    src: "/img/icon-29.svg",
};

const cell04Text12Data = {
    label: "Initial Pending",
};

const textIcon831Data = {
    children: "4 Hours",
};

const cell05Text231Data = {
    className: "cell-05-text-17",
    textIcon8Props: textIcon831Data,
};

const cell06Text2248Data = {
    className: "cell-06-text-9",
};

const textIcon3340Data = {
    children: "John Cart",
};

const cell07Text215Data = {
    textIcon33Props: textIcon3340Data,
};

const divider98Data = {
    className: "divider-9",
};

const tableRow65Data = {
    table22Props: table2253Data,
    cell04TextProps: cell04Text12Data,
    cell05Text2Props: cell05Text231Data,
    cell06Text22Props: cell06Text2248Data,
    cell07Text2Props: cell07Text215Data,
    dividerProps: divider98Data,
};

const state62Data = {
    className: "scroller-10",
};

const scrollbar10Data = {
    stateProps: state62Data,
};

const inputFields10Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-49.svg",
};

const showPage9Data = {
    inputFieldsProps: inputFields10Data,
};

const information9Data = {
    showPageProps: showPage9Data,
};

const arrow19Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-51.svg",
};

const pageNumber241Data = {
    children: "2",
};

const pageNumber242Data = {
    children: "3",
};

const pageNumber243Data = {
    children: "4",
};

const pageNumber244Data = {
    children: "5",
};

const pageNumber325Data = {
    children: "6",
};

const pageNumber245Data = {
    children: "7",
};

const pageNumber326Data = {
    children: "8",
};

const pageNumber327Data = {
    children: "9",
};

const arrow20Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-52.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages9Data = {
    arrow1Props: arrow19Data,
    pageNumber21Props: pageNumber241Data,
    pageNumber22Props: pageNumber242Data,
    pageNumber23Props: pageNumber243Data,
    pageNumber24Props: pageNumber244Data,
    pageNumber25Props: pageNumber325Data,
    pageNumber26Props: pageNumber245Data,
    pageNumber27Props: pageNumber326Data,
    pageNumber28Props: pageNumber327Data,
    arrow2Props: arrow20Data,
};

const page9Data = {
    pagesProps: pages9Data,
};

const dropdown9Data = {
    src: "/img/icon-49.svg",
};

const button9Data = {
    dropdownProps: dropdown9Data,
};

const pagination39Data = {
    showPageProps: information9Data,
    pagesProps: page9Data,
    goToProps2: button9Data,
};

const tooltipTitle32Data = {
    children: "2 Duplicates Found",
};

const stroke2Data = {
    textCopy: <React.Fragment>The system has identified two duplicates. <br /><br />To review the reports, please click on MARCL ID.</React.Fragment>,
    className: "stroke-1",
    tooltipTitle3Props: tooltipTitle32Data,
};

const userInteraction23Data = {
    className: "user-interaction-7",
};

const screen04Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    headerProps: header10Data,
    pageHeading3Props: pageHeading310Data,
    tableHeaderProps: tableHeader11Data,
    icon32Props: icon3210Data,
    searchInputProps: searchInput10Data,
    divider2Props: divider230Data,
    tableHeader2Props: tableHeader24Data,
    table22Props: table2248Data,
    textIcon3Props: textIcon313Data,
    table52Props: table5211Data,
    table62Props: table627Data,
    dividerProps: divider93Data,
    tableRow2Props: tableRow25Data,
    tableRow3Props: tableRow34Data,
    tableRow4Props: tableRow45Data,
    tableRow5Props: tableRow54Data,
    tableRow6Props: tableRow65Data,
    scrollbarProps: scrollbar10Data,
    pagination3Props: pagination39Data,
    strokeProps: stroke2Data,
    userInteraction2Props: userInteraction23Data,
};

const menuLogo11Data = {
    className: "menu-logo-10",
};

const icon2221Data = {
    src: "/img/shape-13.svg",
    className: "atomsicon2019close-10",
};

const frame1813Data = {
    icon22Props: icon2221Data,
};

const aTOMSICON2019notification11Data = {
    className: "atomsicon2019notification-10",
};

const aTOMSICON2019support11Data = {
    className: "atomsicon2019chat-copy-10",
};

const aTOMSAVATARDEFAULT11Data = {
    className: "atomsavatardefault-10",
};

const header11Data = {
    menuLogoProps: menuLogo11Data,
    frame18Props: frame1813Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification11Data,
    aTOMSICON2019supportProps: aTOMSICON2019support11Data,
    aTOMSAVATARDEFAULTProps: aTOMSAVATARDEFAULT11Data,
};

const divider100Data = {
    className: "atomsdividersline2-pxblack-10",
};

const pageHeading311Data = {
    dividerProps: divider100Data,
};

const divider101Data = {
    className: "divider-10",
};

const divider232Data = {
    className: "",
};

const tableHeader12Data = {
    dividerProps: divider101Data,
    dividerProps2: divider232Data,
};

const saveGridSettings11Data = {
    className: "",
};

const icon3211Data = {
    saveGridSettingsProps: saveGridSettings11Data,
};

const icon2222Data = {
    src: "/img/shape-17.svg",
    className: "atomsicon2019close",
};

const frame18311Data = {
    icon22Props: icon2222Data,
};

const searchInput11Data = {
    frame183Props: frame18311Data,
};

const divider233Data = {
    className: "divider-32",
};

const text411Data = {
    children: "Workbench - Remedy",
    className: "",
};

const columnHeader610Data = {
    text4Props: text411Data,
};

const divider234Data = {
    className: "divider-33",
};

const tableHeader25Data = {
    columnHeader25Props: columnHeader610Data,
    divider2Props: divider234Data,
};

const table2254Data = {
    src: "/img/icon.svg",
};

const textIcon315Data = {
    children: "Final Pending - Open",
};

const table26Data = {
    textIcon3Props: textIcon315Data,
};

const textIcon416Data = {
    children: "5 Days",
};

const table5213Data = {
    textIcon4Props: textIcon416Data,
};

const textIcon3218Data = {
    children: "--",
};

const table629Data = {
    textIcon3Props: textIcon3218Data,
};

const divider102Data = {
    className: "divider-10",
};

const tableRow14Data = {
    table22Props: table2254Data,
    table2Props: table26Data,
    table52Props: table5213Data,
    table62Props: table629Data,
    dividerProps: divider102Data,
};

const table2255Data = {
    src: "/img/icon.svg",
};

const cell04Text13Data = {
    label: "Final Pending - Open",
};

const textIcon417Data = {
    children: "2 Days",
};

const table5214Data = {
    textIcon4Props: textIcon417Data,
};

const cell06Text2250Data = {
    className: "cell-06-text-11",
};

const textIcon3341Data = {
    children: "John Cart",
};

const cell07Text216Data = {
    textIcon33Props: textIcon3341Data,
};

const divider103Data = {
    className: "divider-10",
};

const tableRow26Data = {
    table22Props: table2255Data,
    cell04TextProps: cell04Text13Data,
    table52Props: table5214Data,
    cell06Text22Props: cell06Text2250Data,
    cell07Text2Props: cell07Text216Data,
    dividerProps: divider103Data,
};

const table2256Data = {
    src: "/img/icon.svg",
};

const state64Data = {
    className: "rectangle-5-17",
};

const statusIndicator528Data = {
    stateProps: state64Data,
};

const cell04Text211Data = {
    label: "Final Pending - Open",
    statusIndicator5Props: statusIndicator528Data,
};

const textIcon832Data = {
    children: "20 Days",
};

const cell05Text232Data = {
    textIcon8Props: textIcon832Data,
};

const textIcon3219Data = {
    children: "--",
};

const table6210Data = {
    textIcon3Props: textIcon3219Data,
};

const divider104Data = {
    className: "divider-10",
};

const tableRow35Data = {
    table22Props: table2256Data,
    cell04Text2Props: cell04Text211Data,
    cell05Text2Props: cell05Text232Data,
    table62Props: table6210Data,
    dividerProps: divider104Data,
};

const table2257Data = {
    src: "/img/icon-4@2x.png",
};

const state65Data = {
    className: "rectangle-5-17",
};

const statusIndicator529Data = {
    stateProps: state65Data,
};

const cell04Text212Data = {
    label: "Final Pending - Restored",
    statusIndicator5Props: statusIndicator529Data,
};

const textIcon833Data = {
    children: "20 Days",
};

const cell05Text233Data = {
    textIcon8Props: textIcon833Data,
};

const cell06Text2252Data = {
    className: "cell-06-text-11",
};

const textIcon3342Data = {
    children: "John Cart",
};

const cell07Text217Data = {
    textIcon33Props: textIcon3342Data,
};

const divider105Data = {
    className: "divider-10",
};

const tableRow46Data = {
    table22Props: table2257Data,
    cell04Text2Props: cell04Text212Data,
    cell05Text2Props: cell05Text233Data,
    cell06Text22Props: cell06Text2252Data,
    cell07Text2Props: cell07Text217Data,
    dividerProps: divider105Data,
};

const table2258Data = {
    src: "/img/icon.svg",
};

const statusIconBig37Data = {
    className: "",
};

const textIcon316Data = {
    children: "Initial Pending",
};

const textIcon834Data = {
    children: "4 Hours",
};

const cell05Text234Data = {
    className: "cell-05-text-19",
    textIcon8Props: textIcon834Data,
};

const textIcon3220Data = {
    children: "John Cart",
    className: "text-icon-53",
};

const cell07Text38Data = {
    textIcon32Props: textIcon3220Data,
};

const divider106Data = {
    className: "divider-10",
};

const tableRow55Data = {
    table22Props: table2258Data,
    statusIconBig3Props: statusIconBig37Data,
    textIcon3Props: textIcon316Data,
    cell05Text2Props: cell05Text234Data,
    cell07Text3Props: cell07Text38Data,
    dividerProps: divider106Data,
};

const table2259Data = {
    src: "/img/icon.svg",
};

const cell04Text14Data = {
    label: "Initial Pending",
};

const textIcon835Data = {
    children: "4 Hours",
};

const cell05Text235Data = {
    className: "cell-05-text-19",
    textIcon8Props: textIcon835Data,
};

const cell06Text2254Data = {
    className: "cell-06-text-11",
};

const textIcon3343Data = {
    children: "John Cart",
};

const cell07Text218Data = {
    textIcon33Props: textIcon3343Data,
};

const divider107Data = {
    className: "divider-10",
};

const tableRow66Data = {
    table22Props: table2259Data,
    cell04TextProps: cell04Text14Data,
    cell05Text2Props: cell05Text235Data,
    cell06Text22Props: cell06Text2254Data,
    cell07Text2Props: cell07Text218Data,
    dividerProps: divider107Data,
};

const state67Data = {
    className: "scroller-11",
};

const scrollbar11Data = {
    stateProps: state67Data,
};

const inputFields11Data = {
    atomsIcon2019Close: "/img/atoms-icon-2019-close-1.svg",
};

const showPage10Data = {
    inputFieldsProps: inputFields11Data,
};

const information10Data = {
    showPageProps: showPage10Data,
};

const arrow21Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-2.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-27.svg",
};

const pageNumber246Data = {
    children: "2",
};

const pageNumber247Data = {
    children: "3",
};

const pageNumber248Data = {
    children: "4",
};

const pageNumber249Data = {
    children: "5",
};

const pageNumber328Data = {
    children: "6",
};

const pageNumber250Data = {
    children: "7",
};

const pageNumber329Data = {
    children: "8",
};

const pageNumber330Data = {
    children: "9",
};

const arrow22Data = {
    atomsIcon2019Close1: "/img/atoms-icon-2019-close-40.svg",
    atomsIcon2019Close2: "/img/atoms-icon-2019-close-5.svg",
};

const pages10Data = {
    arrow1Props: arrow21Data,
    pageNumber21Props: pageNumber246Data,
    pageNumber22Props: pageNumber247Data,
    pageNumber23Props: pageNumber248Data,
    pageNumber24Props: pageNumber249Data,
    pageNumber25Props: pageNumber328Data,
    pageNumber26Props: pageNumber250Data,
    pageNumber27Props: pageNumber329Data,
    pageNumber28Props: pageNumber330Data,
    arrow2Props: arrow22Data,
};

const page10Data = {
    pagesProps: pages10Data,
};

const dropdown10Data = {
    src: "/img/icon-49.svg",
};

const button10Data = {
    dropdownProps: dropdown10Data,
};

const pagination310Data = {
    showPageProps: information10Data,
    pagesProps: page10Data,
    goToProps2: button10Data,
};

const tooltipTitle33Data = {
    children: "California Report found for the same outage",
    className: "tooltip-title-2",
};

const userInteraction6Data = {
    click2: "",
    className: "user-interaction-5",
};

const screen05Data = {
    itemName1: "My Reports",
    itemName2: "Submitted Reports",
    label1: "Notify Pending",
    label2: "50",
    label3: "All Automated",
    label4: "Initial Pending",
    label5: "22",
    label6: "12 Non-automated Reports",
    label7: "Final Pending - Open",
    spanText1: "22 ",
    spanText2: "+2 Overdue",
    label8: "5 Reports have less than 2 days",
    label9: "Final Pending - Restored",
    label10: "14",
    label11: "12 Unassigned Reports",
    headerProps: header11Data,
    pageHeading3Props: pageHeading311Data,
    tableHeaderProps: tableHeader12Data,
    icon32Props: icon3211Data,
    searchInputProps: searchInput11Data,
    divider2Props: divider233Data,
    tableHeader2Props: tableHeader25Data,
    tableRow1Props: tableRow14Data,
    tableRow2Props: tableRow26Data,
    tableRow3Props: tableRow35Data,
    tableRow4Props: tableRow46Data,
    tableRow5Props: tableRow55Data,
    tableRow6Props: tableRow66Data,
    scrollbarProps: scrollbar11Data,
    pagination3Props: pagination310Data,
    tooltipTitle3Props: tooltipTitle33Data,
    userInteractionProps: userInteraction6Data,
};

