import React, { Component, Fragment } from "react";
import Basket from "../components/other/basket";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class BasketPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenu />
        <Basket />
        <Footer />
      </Fragment>
    );
  }
}

export default BasketPage;
