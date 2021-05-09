import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TimelineHeader() {
  return (
    <div>
      <h1>
        <span className="purple">MY STORY</span> THIS FAR
      </h1>
      <p style={{ paddingTop: "20px", paddingRight: "30px" }}>
        People share resume, achievements, and what not in their portfolio. But
        I belive that the story of someone's life can create a better impact than
        the person's achievement itself.
        <br />
        So here is my story for you!
      </p>
    </div>
  );
}

export default TimelineHeader;
