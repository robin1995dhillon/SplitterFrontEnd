import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/MenuUpload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import ConfirmationImage from "../images/confirmation_success.png";

class Confirmation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Meta title="Cloud of Duty" />
        <Menu></Menu>
        <Container fluid className="pt-5 mt-5" style={{ minHeight: "85vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={ConfirmationImage}
              style={{ height: "350px", width: "350px" }}
            ></Image>
            <Card style={{ marginTop: "5px" }}>
              <Card.Title style={{ textAlign: "center", fontStyle: "Bold" }}>
                <h2>
                  Congratulations!!! Your files will be emailed to you shortly.
                </h2>
              </Card.Title>
              <Card.Body>
                <h4> Email ID : {this.props.history.location.data.email}</h4>
                <h4>
                  {" "}
                  Confirmation ID:{" "}
                  {this.props.history.location.data.confirmationid}
                </h4>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          ></div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Confirmation;
