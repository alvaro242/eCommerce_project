import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../other/skeleton";
import { getWebInfo } from "../api/api";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      email: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container className="footerContainer">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h6 className="footer-menu-title">
                  <Link
                    to="/thanks"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Special Thanks
                  </Link>
                </h6>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h6 className="footer-menu-title">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </Link>
                </h6>
              </Col>
            </Row>
          </Container>
          <div className="footerText">
            2023 Alvaro Dominguez Mora. Final project for the course Software
            Engineering in Manchester Metropolitan University
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
