import React from "react";
import Card7 from "../Card7";
import Card22 from "../Card22";
import Card3 from "../Card3";
import Card4 from "../Card4";
import "./Cards3.css";

function Cards3(props) {
  const { card31Props, card32Props } = props;

  return (
    <div className="cards-2">
      <Card7 />
      <Card22 />
      <Card3 label1={card31Props.label1} label2={card31Props.label2} label3={card31Props.label3} />
      <Card4 />
      <Card3 label1={card32Props.label1} label2={card32Props.label2} label3={card32Props.label3} />
    </div>
  );
}

export default Cards3;
