import React from "react";
import Type from "./Type";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeHeaderContent() {
  return (
    <div>
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hi There! <span className="wave">👋🏻</span>
      </h1>

      <h1 className="heading-name">
        I am
        <strong className="main-name"> GLORIA DUNWELL</strong>
      </h1>

      <div style={{ padding: 50, textAlign: "left" }}>
        <Type />
      </div>
    </div>
  );
}

export default HomeHeaderContent;
