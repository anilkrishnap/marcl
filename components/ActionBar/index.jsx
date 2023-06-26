import React from "react";
import Frame182 from "../Frame182";
import Icon32 from "../Icon32";
import SearchInput from "../SearchInput";
import Icon42 from "../Icon42";
import Icon52 from "../Icon52";
import Divider2 from "../Divider2";
import "./ActionBar.css";

function ActionBar(props) {
  const { className, icon32Props, icon32Props2, divider2Props } = props;

  return (
    <div className={`action-bar-1 ${className || ""}`}>
      <div className="overlap-group1-1">
        <div className="setting-1">
          <div className="template-1">
            <div className="dropdown-input-1">
              <Frame182 />
              <div className="elements-33"></div>
            </div>
            <Icon32 saveGridSettingsProps={icon32Props.saveGridSettingsProps} />
          </div>
          <SearchInput className={icon32Props2.className} frame183Props={icon32Props2.frame183Props} />
          <Icon42 />
          <Icon52 />
        </div>
        <Divider2 className={divider2Props.className} />
      </div>
    </div>
  );
}

export default ActionBar;
