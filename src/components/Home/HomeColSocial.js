import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeColSocial(props) {
  return (
    <Col md={12} className={props.className}>
      <h1>
        <span className="purple">CONNECT </span>WITH ME
      </h1>
      <p>
        Feel free to <span className="purple">connect </span>with me on
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/gloria-dunwell-514412b1/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/gloriadunwell/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </Col>
  );
}
export default HomeColSocial;
