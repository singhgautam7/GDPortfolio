import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../assets/lotus.svg";
import Particle from "../UI/Particle";
import Home2 from "./Home2";
import ColSectionImage from "../UI/ColSectionImage";
import HomeHeaderContent from "./HomeHeaderContent";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <HomeHeaderContent />
            </Col>
            <ColSectionImage
              md={4}
              paddingBottom={20}
              src={homeLogo}
              alt="home pic"
            />
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
