import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import logo1 from "../../assets/home_wall1.jpg";
import logo2 from "../../assets/home_wall2.jpg";
import logo3 from "../../assets/home_wall3.jpg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCurve from "../UI/ImageCurve";

function HomePhotos() {
  return (
    <Container fluid className="home-photos-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              MOMENTS CAPTURED ON<span className="purple"> CAMERA</span>
            </h1>
            <p>
              Excerpts from my <span className="purple">Yoga</span> Shoot
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-photos">
            <Card className="home-photos-card">
              <Carousel
                fade
                autoPlay={true}
                indicators={true}
                interval={3000}
                pause={false}
                controls={true}
              >
                <Carousel.Item>
                  <ImageCurve src={logo1} alt="logo1"/>
                </Carousel.Item>

                <Carousel.Item>
                  <ImageCurve src={logo2} alt="logo2"/>
                </Carousel.Item>

                <Carousel.Item>
                  <ImageCurve src={logo3} alt="logo3"/>
                </Carousel.Item>

              </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePhotos;
