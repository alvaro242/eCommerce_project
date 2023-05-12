import React, { Component, Fragment } from "react";
import NavMenu from "../components/common/navMenu";
import Footer from "../components/common/footer";
import { Container } from "react-bootstrap";
import { getProductsBySubcategory } from "../components/api/api";
import SubcategoryContent from "../components/Content/subcategoryContent";
import { Link } from "react-router-dom";

class SubcategoryPage extends Component {
  constructor({ match }) {
    super();

    this.state = {
      subcategoryName: match.params.subcategory,
      parentCategory: "",
      products: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  async getData() {
    await getProductsBySubcategory(this.state.subcategoryName)
      .then((response) =>
        this.setState({
          products: response.data,
          parentCategory: response.data[0].category,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <NavMenu></NavMenu>
          <div>{<h2>{this.state.subcategoryName}</h2>}</div>
          <div>
            <Link
              to={"/categories/"}
              style={{ textDecoration: "none", color: "black" }}
            >
              All categories
            </Link>{" "}
            &gt;{" "}
            <Link
              to={"/categories/" + this.state.parentCategory}
              style={{ textDecoration: "none", color: "black" }}
            >
              {this.state.parentCategory}{" "}
            </Link>{" "}
            &gt; {this.state.subcategoryName}
          </div>
          <SubcategoryContent
            subcategoryName={this.state.subcategoryName}
            products={this.state.products}
          ></SubcategoryContent>
        </Container>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default SubcategoryPage;
