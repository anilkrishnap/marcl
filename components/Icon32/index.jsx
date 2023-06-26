import React from "react";
import SaveGridSettings from "../SaveGridSettings";
import "./Icon32.css";

function Icon32(props) {
  const { saveGridSettingsProps } = props;

  return (
    <div className="icon">
      <SaveGridSettings className={saveGridSettingsProps.className} />
    </div>
  );
}

export default Icon32;
