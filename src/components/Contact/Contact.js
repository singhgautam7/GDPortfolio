import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import contactLogo from "../../assets/yoga.svg";
import Particle from "../UI/Particle";
import ColSectionImage from "../UI/ColSectionImage";
import ContactHeaderForm from "./ContactHeaderForm";

function Contact() {
  return (
    <section>
      <div className="contact-section">
        <Particle />
        <Container className="contact-content">
          <Row>
            <Col md={7}>
              <ContactHeaderForm />
            </Col>

            <ColSectionImage
              md={4}
              paddingBottom={20}
              src={contactLogo}
              alt="contact pic"
            />
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Contact;
