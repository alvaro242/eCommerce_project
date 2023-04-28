import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/featuredProducts";
import Categories from "../components/home/categories";
import ItemsList from "../components/home/itemsList";

import { Container } from "react-bootstrap";
import SimpleSlider from "../components/home/simpleSlider";
import "../assets/css/home.css";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";

import axios from "axios";

export class homePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  componentWillUnmount() {
    axios.post("http://127.0.0.1:8000/api/visitor");
    //it will only exec once
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
