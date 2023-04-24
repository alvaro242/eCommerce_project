import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/featuredProducts";
import Categories from "../components/home/categories";
import ItemsList from "../components/home/itemsList";

import { Container } from "react-bootstrap";
import SimpleSlider from "../components/home/simpleSlider";
import "../assets/css/home.css";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

export class homePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu />
          <Categories />
          <SimpleSlider />
          <FeaturedProducts />

          <ItemsList />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default homePage;
