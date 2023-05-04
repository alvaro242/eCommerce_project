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
    const setUser = this.props.setUser;
    const user = this.props.user;

    return (
      <Fragment>
        <Container>
          {console.log(user)}
          <NavMenu />
          <Login setUser={setUser} user={user} />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default LoginPage;
