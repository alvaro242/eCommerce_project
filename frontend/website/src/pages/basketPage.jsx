import React, { Component, Fragment } from "react";
import BasketContent from "../components/Content/basketContent";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class BasketPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const user = this.props.user;
    return (
      <Fragment>
        <NavMenu />
        <BasketContent user={user} />
        <Footer />
      </Fragment>
    );
  }
}

export default BasketPage;
