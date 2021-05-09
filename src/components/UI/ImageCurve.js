import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageCurve(props) {
  return (
    <div>
      <img
        className="home-photos-image-curve"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

export default ImageCurve;
