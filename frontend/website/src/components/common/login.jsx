import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { login } from "../api/api";

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginEmail: "",
      loginPassword: "",
      loggedIn: false,
      feedbackMessageLogin: <div></div>,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.setState({ loggedIn: true });
    }
  }

  formSubmit = (e) => {
    console.log("trigger");
    e.preventDefault();
    const send = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };

    login(send)
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("token", response.data.token);

          this.setState({ loggedIn: true });
        } else {
          this.setState({
            feedbackMessageLogin: (
              <div className="alert alert-danger">
                Invalid details. Try it again
              </div>
            ),
          });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    if (this.state.loggedIn == true) {
      return <Redirect to={"/account"} />;
    }
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={12} lg={12} sm={12} xs={12}>
              <Form className="formContainer" onSubmit={this.formSubmit}>
                <center>
                  <h4 className="p-2"> USER LOG IN </h4>
                </center>

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Email"
                  onChange={(e) =>
                    this.setState({ loginEmail: e.target.value })
                  }
                />

                <input
                  className="form-control m-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    this.setState({ loginPassword: e.target.value })
                  }
                />

                <Button type="submit" className="btn  m-2 loginButton">
                  {" "}
                  Log In{" "}
                </Button>
              </Form>
              {this.state.feedbackMessageLogin}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12} lg={12} sm={12} xs={12}>
              <Form className="formContainer">
                <center>
                  <h4 className="p-2"> Sign Up </h4>
                </center>
                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="email address"
                />

                <input
                  className="form-control m-2"
                  type="password"
                  placeholder="Password"
                />

                <input
                  className="form-control m-2"
                  type="password"
                  placeholder="Confirm password"
                />
                <Button type="submit" className="btn  m-2 loginButton">
                  {" "}
                  Sign Up{" "}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
