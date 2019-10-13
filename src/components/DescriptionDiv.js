import React from "react";

function DescriptionDiv(props) {
  let text = props.text ? props.text : "No Description";
  if (text.length > 70) {
    text = text.slice(0, 70);
    text = text + "...";
  }

  return (
    <div className="descriptionDiv">
      <p className="descriptionText">{text}</p>
    </div>
  );
}

export default DescriptionDiv;
