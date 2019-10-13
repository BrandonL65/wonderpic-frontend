import React from "react";

export default function Footer(props) {
  return (
    <div className="footerSection">
      <a href={props.linkTo}>
        <button className="btn">
          <i className="fas fa-heart"><span style = {{fontWeight: 400}}> Unsplash</span></i>
        </button>
      </a>
      <a href={props.dl}>
        <button className="btn">Download</button>
      </a>
    </div>
  );
}
