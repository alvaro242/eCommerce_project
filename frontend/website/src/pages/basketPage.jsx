import React, { Component, Fragment } from "react";
import Basket from "../components/other/basket";
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
        <Basket user={user} />
        <Footer />
      </Fragment>
    );
  }
}

export default BasketPage;
