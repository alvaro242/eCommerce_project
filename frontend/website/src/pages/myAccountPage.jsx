import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import MyAccountContent from "../components/other/myAccountContent";

class MyAccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const user = this.props.user;

    return (
      <Fragment>
        <Container>
          <NavMenu />
          <MyAccountContent user={user} />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default MyAccountPage;
