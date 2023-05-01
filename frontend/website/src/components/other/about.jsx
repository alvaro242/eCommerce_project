import React, { Component, Fragment } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import LoadingSkeleton from "./skeleton";
import ReactHtmlParser from "react-html-parser";
import { getWebInfo } from "../api/api";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "",
    };
  }

  componentDidMount() {
    this.setState({ about: LoadingSkeleton() });

    getWebInfo()
      .then((response) => this.htmlParser(response.data[0].about))
      .catch((error) => console.log(error));
  }

  htmlParser(html) {
    let parsedAbout = ReactHtmlParser(html);

    this.setState({ about: parsedAbout });
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
                      <h4>About me</h4>

                      <div>{this.state.about}</div>
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

export default About;
