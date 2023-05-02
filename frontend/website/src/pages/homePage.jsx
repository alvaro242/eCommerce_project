import React, { Component, Fragment } from "react";
import TopSellerProducts from "../components/home/topsellers";
import CoffeeCategories from "../components/home/coffeeCategories";
import NewArrivals from "../components/home/newArrivals";

import { Container } from "react-bootstrap";
import SimpleSlider from "../components/home/simpleSlider";
import "../assets/css/home.css";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { postVisitorDetails } from "../components/api/api";
import { getAllCategories } from "../components/api/api";
import LoadingSkeleton from "../components/other/skeleton";

export class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subcategories: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    this.getData();
  }

  async getData() {
    await getAllCategories()
      .then((response) => {
        this.setState({
          subcategories: response.data[0].subcategory,
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    postVisitorDetails();
    //it will only exec once
  }

  renderCategeories() {
    if (this.state.isLoading === true) {
      return LoadingSkeleton();
    } else {
      return <CoffeeCategories subcategories={this.state.subcategories} />;
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu />
          {this.renderCategeories()}

          <SimpleSlider />
          <TopSellerProducts />

          <NewArrivals />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default homePage;
