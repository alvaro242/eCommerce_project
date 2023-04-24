import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container className="footerContainer">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">Contact Details</h5>
                <p>
                  11 Clarence St, Salford, Greater Manchester <br></br>
                  Email: contact@alvarodominguezmora.com
                </p>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </Link>
                </h5>
              </Col>
            </Row>
          </Container>
          <p className="footerText">
            (C) 2023 Alvaro Dominguez Mora. Final project for the course
            Software Engineering in Manchester Metropolitan University
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
