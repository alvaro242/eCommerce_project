import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/featuredProducts";
import Categories from "../components/home/categories";
import ItemsList from "../components/home/itemsList";

import { Container } from "react-bootstrap";
import SimpleSlider from "../components/home/simpleSlider";
import "../assets/css/home.css";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { postVisitorDetails } from "../components/api/api";
import { getAllCategories } from "../components/api/api";

export class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subcategories: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    getAllCategories()
      .then((response) => {
        this.setState({ subcategories: response.data[0].subcategory });
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    postVisitorDetails();
    //it will only exec once
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu />
          <Categories subcategories={this.state.subcategories} />
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
