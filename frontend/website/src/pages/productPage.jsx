import React, { Component, Fragment } from "react";
import Product from "../components/product/product";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

class ProductPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <NavMenu />
        <Product />
        <Footer />
      </Fragment>
    );
  }
}

export default ProductPage;
