import React from "react";
import Heading from "./Heading";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolios() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="portfolio-head text-center" style={{ marginTop: 80 }}>
        <Heading text="OUR PORTFOLIO" />
        <p>
          Check out the full portfolio of our works including haircuts, hair
          extensions, and more. Everything you see here was performed by our
          stylists and hairdressers.
        </p>
      </div>
      <div className="container">
        <Row data-aos="flip-left">
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port1.jpg" />
          </Col>
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port2.jpg" />
          </Col>
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port3.jpg" />
          </Col>
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port4.jpg" />
          </Col>
        </Row>
        <Row data-aos="zoom-in">
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port2.jpg" />
          </Col>
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port4.jpg" />
          </Col>
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port1.jpg" />
          </Col>
          <Col lg={3} md={4} xs={6} style={{ marginTop: 10 }}>
            <Image src="./images/port3.jpg" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Portfolios;
