import React, { Component, Fragment } from "react";
import Product from "../components/product/product";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { getProductByID } from "../components/api/api";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class ProductPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      productid: match.params.productid,
      productDetails: [],
      productCategory: "",
      productSubcategory: "",
      productName: "",
    };
  }

  componentDidMount() {
    window.scroll({ top: 100, left: 100, behavior: "smooth" });
    this.getData();
  }
  async getData() {
    await getProductByID(this.state.productid)
      .then((response) => {
        this.setState({
          productDetails: response.data,
          productCategory: response.data[0].category,
          productSubcategory: response.data[0].subcategory,
          productName: response.data[0].name,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <NavMenu />

        <Container>
          <Link
            to={"/categories/"}
            style={{ textDecoration: "none", color: "black" }}
          >
            All categories
          </Link>{" "}
          &gt;{" "}
          <Link
            to={"/categories/" + this.state.productCategory}
            style={{ textDecoration: "none", color: "black" }}
          >
            {this.state.productCategory}{" "}
          </Link>{" "}
          &gt;{" "}
          <Link
            to={"/subcategories/" + this.state.productSubcategory}
            style={{ textDecoration: "none", color: "black" }}
          >
            {this.state.productSubcategory}
          </Link>
        </Container>
        <Product productDetails={this.state.productDetails} />
        <Footer />
      </Fragment>
    );
  }
}

export default ProductPage;
