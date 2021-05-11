import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../UI/Particle";
import GautamHeader from "./GautamHeader";

function Gautam() {
  return (
    <section>
      <div className="timeline-section">
        <Particle />

        <Container className="gautam-description">
          <Row>
            <Col md={12}>
              <GautamHeader />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Gautam;
