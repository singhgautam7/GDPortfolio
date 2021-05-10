import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFoundHeader() {
  return (
    <div>
      <h1>
        <span className="purple">OOPS!</span> WRONG PATH
      </h1>
      <p style={{ paddingTop: "20px", paddingRight: "30px" }}>
        404. Page not found.
      </p>
    </div>
  );
}

export default NotFoundHeader;
