import Meta from "../components/Meta";
import Hero from "../components/Hero";
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/MenuUpload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

class Upload extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      files: {
        label: "only .mp3 files are supported!!",
        selectedFiles: null,
        loaded: 0,
      },
    };
  }

  onFileUploadChange = (event) => {
    event.preventDefault();
    var filename = event.target.files[0].name;

    this.setState({
      files: {
        label: filename,
        selectedFiles: event.target.files,
        loaded: 1,
      },
    });
  };

  uploadFile = (event) => {
    event.preventDefault();
    console.table(event.target);
    // const formData = new FormData(event.target);
    //API AXIOS CALL HERE
    let timerInterval;
    Swal.fire({
      title: "Please Wait",
      html: "Your Request is Processing!!!! <b></b> milliseconds.",
      timer: 100000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
      this.props.history.push({
        pathname: "/confirmation",
        data: {
          email: "email",
          confirmationid: "1234",
        },
      });
    });
    //add alert if any error from API
  };

  render() {
    return (
      <div>
        <Meta title="Cloud of Duty" />
        <Menu></Menu>
        <Container fluid className="pt-5 mt-5" style={{ minHeight: "85vh" }}>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={this.uploadFile}>
                <Card>
                  <Card.Header>
                    {" "}
                    <h4>Upload your audio file </h4>
                  </Card.Header>
                  <Card.Body>
                    <Form.Group as={Row} controlId="email">
                      <Form.Label column md={2}>
                        {" "}
                        Email
                      </Form.Label>
                      <Col md={10}>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email here.."
                          name="email"
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="uploadFile">
                      <Form.Label column md={2}>
                        Audio File
                      </Form.Label>
                      <Col md={10}>
                        <Form.File
                          type="file"
                          id="uploadFile"
                          name="uploadFile"
                          label={this.state.files.label}
                          custom
                          accept=".mp3"
                          onChange={this.onFileUploadChange}
                          value={this.state.selectedFiles}
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group id="agreeTermsAndConditions">
                      <Form.Check
                        type="checkbox"
                        label="By selecting this checkbox, you agree that we upload this file to our servers for processing."
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ float: "right" }}
                    >
                      Submit
                    </Button>
                  </Card.Body>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Upload;
