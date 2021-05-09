import React from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ColSectionImage(props) {
  return <Col md={props.md} style={{ paddingBottom: props.paddingBottom }}>
    <img src={props.src} alt={props.alt} className="img-fluid" />
  </Col>;
}

export default ColSectionImage;
