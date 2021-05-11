import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../UI/Particle";
import NotFoundHeader from "./NotFoundHeader";

function NotFound() {
  return (
    <section>
      <div className="timeline-section">
        <Particle />

        <Container className="not-found-description">
          <Row>
            <Col md={12}>
              <NotFoundHeader />
            </Col>
            {/* <ColSectionImage
              md={4}
              paddingBottom={20}
              src={timelineLogo}
              alt="contact pic"
            /> */}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default NotFound;
