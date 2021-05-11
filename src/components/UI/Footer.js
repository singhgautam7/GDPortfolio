import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} GD</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          {/* <h3></h3> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/gloria-dunwell-514412b1/"
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/gloriadunwell/"
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.onefitplus.com/instructors/6010c780baecf16e621d4b5a/Gloria"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
