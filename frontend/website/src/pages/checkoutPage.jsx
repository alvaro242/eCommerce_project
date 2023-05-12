import React, { Component, Fragment } from "react";
import Checkout from "../components/Content/checkout";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class CheckoutPage extends Component {
  render() {
    const user = this.props.user;
    console.log(user);
    return (
      <Fragment>
        <NavMenu />
        <Checkout user={user} />
        <Footer />
      </Fragment>
    );
  }
}

export default CheckoutPage;
