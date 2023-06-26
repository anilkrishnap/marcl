import React from "react";
import "./InputFields.css";

function InputFields(props) {
  const { atomsIcon2019Close } = props;

  return (
    <div className="input-fields">
      <div className="elements-23">
        <div className="frame-31">
          <div className="placeholder-text-55 neuehaasgroteskdisplaystd-regular-normal-black-14px">5</div>
          <img className="atomsicon2019close-23" src={atomsIcon2019Close} alt="ATOMS/ICON/2019/close" />
        </div>
        <div className="divider-34"></div>
      </div>
    </div>
  );
}

export default InputFields;
