import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePhotos from "./HomePhotos";
import HomeColSocial from "./HomeColSocial";


function Home2() {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                My path to fitness trainer started with <i> Yoga. </i> <b> 🧘 </b>
                <br />
                One thing led to another and I am became a<i><b className="purple"> Yogini</b></i> after tons of practice. 
                <br />
                <br />
                My current focus is on developing my knowledge as a &nbsp;
                <i><b className="purple">Fitness Trainer </b></i> so that I can better help my clients to achieve their goals.
                <br />
                <br />
              </p>
            </Col>
          </Row>
          <Row>
            <HomeColSocial className="home-about-social"/>
          </Row>
          <Row>
          <Col md={12}>
            <HomePhotos />
          </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  export default Home2;