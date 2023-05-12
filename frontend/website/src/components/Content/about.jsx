import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Container>
          <p className=""></p>

          <Row className="p-2">
            <Col className=" bg-white mt-2" md={10} lg={10} sm={10} xs={10}>
              <h3>About: </h3>
              <p>
                Please note this is not a real website.
                <h4>Alvaro Dominguez Mora</h4> <p></p>Contact:
                contact@alvarodominguezmora.com
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default About;
