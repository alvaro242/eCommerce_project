import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import MyAccountContent from "../components/product/myAccountContent";

class MyAccountPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu />
          <MyAccountContent />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default MyAccountPage;
