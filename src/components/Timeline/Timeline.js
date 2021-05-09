import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import timelineLogo from "../../assets/warrior.svg";
import Particle from "../UI/Particle";
import ColSectionImage from "../UI/ColSectionImage";
import TimelineHeader from "./TimelineHeader";
import TimelineComponent from "./TimelineComponent";

function Timeline() {
  return (
    <section>
      <div className="timeline-section">
        <Particle />

        <Container className="contact-content">
          <Row>
            <Col md={7}>
              <TimelineHeader />
            </Col>
            <ColSectionImage
              md={4}
              paddingBottom={20}
              src={timelineLogo}
              alt="contact pic"
            />
          </Row>
          <Row>
            <Col md={12} className="contact-section-social">
                <TimelineComponent />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Timeline;
