import Meta from "../components/Meta";
import Hero from "../components/Hero";
import React, { Component } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Home = () => {
  // page content
  const pageTitle = "Cloud of Duty";
  const pageDescription = "Welcome to Cloud of Duty";

  return (
    <div>
      <Meta title={pageTitle} />
      <Hero
        heading="Cloud Of Duty"
        paragraph="Upload Your Favourite Song to remove vocals from the Audio Track."
        button="Get
      Started"
      />
      <Menu></Menu>
      <Container>
        <Header head={"Why Cloud Of Duty?"} description={""} />
        <Row>
          <Col lg="4" className="text-center">
            <Image fluid roundedCircle src="" />
            <h3>Title1</h3>
            <p>p1</p>
          </Col>
          <Col lg="4" className="text-center">
            <Image fluid roundedCircle src="" />
            <h3>Title2</h3>
            <p>p2</p>
          </Col>
          <Col lg="4" className="text-center">
            <Image fluid roundedCircle src="" />
            <h3>Title3</h3>
            <p>p3</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Header head={"How it Works?"} description={""} />
        <Row>
          <Col lg="7">
            <h2 className="mt-5">
              Get Started.{" "}
              <span className="text-muted">
                Enter your email and Upload Your Audio File.
              </span>
            </h2>
            <p className="lead">text here</p>
          </Col>
          <Col lg="5">
            <Image fluid src="" />
          </Col>
        </Row>
        <Row>
          <Col lg="7" className="order-lg-2">
            <h2 className="mt-5">
              Check your inbox.{" "}
              <span className="text-muted">
                The link for the file will be sent to your email..
              </span>
            </h2>
            <p className="lead">tExt here</p>
          </Col>
          <Col lg="5" className="order-lg-1">
            <Image fluid src="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
