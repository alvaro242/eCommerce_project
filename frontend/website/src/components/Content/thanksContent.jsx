import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class ThanksContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Container>
          <p className=""></p>

          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={10}
              lg={10}
              sm={10}
              xs={10}
            >
              <h4>Special thanks to: </h4>
              <p></p>
              <ul>
                <li>Flaticon website </li>
                <li>Roundicons for countries logos </li>
                <li>Roberto Gomez for the design of the coffee bags </li>
                <li>
                  All lecturers in Manchester metropolitan University, specially
                  from the Mobile Apps / React Native unit{" "}
                </li>
                <li>Canva.com for the GimmeBeans logo </li>
              </ul>
              And to all free technologies and tools used for this assement
              including:
              <p></p>
              <ul>
                <li>React Native </li>
                <li>Axios </li>
                <li>Stripe</li>
                <li>Laravel and Laravel Passport </li>
                <li>Swagger </li>
                <li>
                  MariaDB server provided by Manchester Metropolitan University{" "}
                </li>
                <li>ESLint </li>
                <li>pwabuilder.com </li>
                <li>React-iOS-PWA-prompt</li>
                <li>progressier.com for PWA iOS splashes</li>
                <li>Bootstrap </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ThanksContent;
