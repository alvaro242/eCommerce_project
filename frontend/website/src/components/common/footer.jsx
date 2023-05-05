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
      copyright: "",
    };
  }

  componentDidMount() {
    /*

  I'll better disable this for now as it overloads the API

    this.setState({ address: LoadingSkeleton() });
    this.setState({ email: LoadingSkeleton() });
    this.setState({ copyright: LoadingSkeleton() });

    getWebInfo()
      .then((response) =>
        this.setState({
          address: response.data[0].address,
          email: response.data[0].email,
          copyright: response.data[0].copyright,
        })
      )

      .catch((error) => console.log(error));
      */
  }

  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container className="footerContainer">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h6 className="footer-menu-title">Address</h6>
                <div>{this.state.address}</div>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h6 className="footer-menu-title">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact me
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
            {/*this.state.copyright */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
