import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div className="footerbackground m-0 mt-5 pt-3">
          <Container className="footerContainer">
            <Row className="px-0 my-3">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5>
                  <Link
                    to="/thanks"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Special Thanks
                  </Link>
                </h5>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </Link>
                </h5>
              </Col>
            </Row>
          </Container>
          <div className="footerBottom">
            2024 Alvaro Dominguez Mora. Final project for the course Software
            Engineering in Manchester Metropolitan University
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
