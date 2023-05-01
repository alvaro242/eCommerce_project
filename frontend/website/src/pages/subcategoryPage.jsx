import React, { Component, Fragment } from "react";
import Categories from "../components/home/categories";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { getAllCategories } from "../components/api/api";
import { Container } from "react-bootstrap";
import { getProductsBySubcategory } from "../components/api/api";
import Subcategory from "../components/product/subcategory";

class SubcategoryPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      subcategoryName: match.params.subcategory,
      products: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    getProductsBySubcategory()
      .then((response) => this.setState({ products: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu></NavMenu>
          <Subcategory
            subcatName={this.state.subcategoryName}
            products={this.state.products}
          ></Subcategory>
          <div>{this.state.subcategoryName}</div>
          <Footer></Footer>
        </Container>
      </Fragment>
    );
  }
}

export default SubcategoryPage;
