import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import Login from "../components/common/login";

class LoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu />
          <Login />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default LoginPage;
