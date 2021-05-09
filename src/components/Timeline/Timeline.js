import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import timelineLogo from "../../assets/warrior.svg";
import Particle from "../UI/Particle";
import ColSectionImage from "../UI/ColSectionImage";
import TimelineHeader from "./TimelineHeader";

function Timeline() {
  return (
    <section>
      <div className="contact-section">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
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
            {/* <HomeColSocial className="contact-section-social"/> */}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Timeline;
