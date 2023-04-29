import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import LoadingSkeleton from "../other/skeleton";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      email: "",
    };
  }

  componentDidMount() {
    this.setState({ address: LoadingSkeleton() });
    this.setState({ email: LoadingSkeleton() });

    axios
      .get("http://127.0.0.1:8000/api/webinfo")
      .then((response) =>
        this.setState({
          address: response.data[0].address,
          email: response.data[0].email,
        })
      )

      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={12} lg={12} sm={12} xs={12}></Col>
          </Row>
          <Row>
            <Col md={6} lg={6} sm={12} xs={12}>
              <Fragment>
                <Container>
                  <Row className="p-2">
                    <Col
                      className="shadow-sm bg-white mt-2"
                      md={12}
                      lg={12}
                      sm={12}
                      xs={12}
                    >
                      <Row className="text-center">
                        <Col
                          className="d-flex justify-content-center"
                          md={6}
                          lg={6}
                          sm={12}
                          xs={12}
                        >
                          <Form
                            id="contactForm"
                            onSubmit={this.onFormSubmit}
                            className="onboardForm"
                          >
                            <h6 className="">Contact me </h6>

                            <input
                              onChange={this.nameOnChange}
                              className="form-control m-2"
                              type="text"
                              placeholder="Your Name"
                            />

                            <input
                              onChange={this.emailOnChange}
                              className="form-control m-2"
                              type="email"
                              placeholder="Email"
                            />

                            <Form.Control
                              onChange={this.messageOnChange}
                              className="form-control m-2"
                              as="textarea"
                              rows={3}
                              placeholder="Message"
                            />

                            <Button
                              id="sendBtn"
                              type="submit"
                              className="btn btn-block m-2 site-btn-login"
                            >
                              {" "}
                              Send{" "}
                            </Button>
                          </Form>
                        </Col>

                        <Col
                          className="p-0 Desktop m-0"
                          md={6}
                          lg={6}
                          sm={6}
                          xs={6}
                        >
                          <br></br>
                          <br></br>
                          <div className="section-title-contact">
                            {this.state.address}{" "}
                          </div>
                          <div>{this.state.email}</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Fragment>
            </Col>
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
              <img className="loginBanner" />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
