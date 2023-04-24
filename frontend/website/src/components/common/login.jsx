import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class Login extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={12} lg={12} sm={12} xs={12}></Col>
          </Row>
          <Row>
            <Col md={6} lg={6} sm={12} xs={12}>
              <Form className="formContainer">
                <h4 className=""> USER LOG IN </h4>

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Username"
                />

                <input
                  className="form-control m-2"
                  type="password"
                  placeholder="Password"
                />
                <Button className="btn  m-2 loginButton"> Submit </Button>
              </Form>
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

export default Login;
