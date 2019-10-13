import React from "react";
import SearchBar from "./SearchBar.js";

export default function TitleArea(props) {
  return (
    <div className="titleAndSearch">
      <h1 className = "title">WonderPic</h1>
      <SearchBar handleSearch={props.handleSearch} />
    </div>
  );
}
