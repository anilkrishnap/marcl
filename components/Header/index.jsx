import React from "react";
import MenuLogo from "../MenuLogo";
import Frame18 from "../Frame18";
import ATOMSICON2019notification from "../ATOMSICON2019notification";
import ATOMSICON2019support from "../ATOMSICON2019support";
import ATOMSAVATARDEFAULT from "../ATOMSAVATARDEFAULT";
import Frame14 from "../Frame14";
import Divider from "../Divider";
import "./Header.css";

function Header(props) {
  const {
    menuLogoProps,
    frame18Props,
    aTOMSICON2019notificationProps,
    aTOMSICON2019supportProps,
    aTOMSAVATARDEFAULTProps,
  } = props;

  return (
    <header className="header">
      <div className="global-header">
        <div className="marcl-header">
          <div className="frame-3">
            <MenuLogo className={menuLogoProps.className} />
            <div className="global-search-icons">
              <div className="moleculesformsearch">
                <Frame18 icon22Props={frame18Props.icon22Props} />
                <div className="elements-1"></div>
              </div>
              <ATOMSICON2019notification className={aTOMSICON2019notificationProps.className} />
              <ATOMSICON2019support className={aTOMSICON2019supportProps.className} />
              <img className="download" src="/img/download@2x.png" alt="download" />
              <ATOMSAVATARDEFAULT className={aTOMSAVATARDEFAULTProps.className} />
            </div>
          </div>
        </div>
        <div className="tab-header">
          <div className="tab-1">
            <div className="tab-items-1">
              <Frame14 />
              <img className="frame-14" src="/img/frame-14@2x.png" alt="Frame 14" />
            </div>
          </div>
          <Divider />
        </div>
      </div>
    </header>
  );
}

export default Header;
