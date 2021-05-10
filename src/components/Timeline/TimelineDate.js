import React from "react";

const TimelineDate = (props) => {
  return (
    <div
      style={{
        display: "block",
        float: "centre",
        marginRight: "20px",
        marginLeft: "30px",
        padding: "10px",
        // background: "#1a1c20",
        background: "black",
        color: "#fff",
        borderRadius: "10px",
        border: "1px solid white"
      }}
    >
      {props.date}
    </div>
  );
};

export default TimelineDate;
